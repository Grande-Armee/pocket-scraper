import './pathAliases';

import { LoggerService } from '@grande-armee/pocket-common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/appModule';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createApplicationContext(AppModule, {
    bufferLogs: true,
  });

  const logger = app.get(LoggerService);

  app.useLogger(logger);
  app.flushLogs();

  await app.init();

  logger.info('App initialized.');

  app.enableShutdownHooks();
}

bootstrap();
