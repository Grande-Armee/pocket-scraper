/* eslint-disable */
const { join } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  rootDir: '.',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  coverageDirectory: join(__dirname, 'coverage'),
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  // reporters: ['default', 'jest-junit'],
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  testTimeout: 15000,
};
