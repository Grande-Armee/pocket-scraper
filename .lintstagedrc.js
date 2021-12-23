module.exports = {
  '*.ts': ['npm run lint:fix -- --max-warnings=0 -- ', 'npm run format:fix -- ', 'npm run build'],
};
