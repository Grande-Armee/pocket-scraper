import { EnvParser } from '@grande-armee/pocket-common';

const envParser = new EnvParser();

const e = envParser.get.bind(envParser);

export const config = {
  appName: 'pocket-scraper',
  broker: {
    uri: e('RABBITMQ_URI'),
  },
  logger: {
    prettifyLogs: Boolean(e('LOGGER_SHOULD_PRETTIFY_LOGS')),
    logLevel: e('LOGGER_LOG_LEVEL'),
  },
};
