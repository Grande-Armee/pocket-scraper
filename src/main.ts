import './pathAliases';

import { LoggerService } from '@grande-armee/pocket-common';
import { NestFactory } from '@nestjs/core';
import Turndown from 'turndown';

import { BrowserService } from '@shared/browser/services/browser/browserService';

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

  const browserService = app.get(BrowserService);

  const { title, content } = await browserService.getPageHTMLContent(
    'https://dimitarsimeonov.com/2021/12/12/opt-out-of-cynicism',
  );

  // console.log(x.content);

  const turndownService = new Turndown();

  // console.log(turndownService.turndown(content));

  console.log({
    title,
    markdown: turndownService.turndown(content),
  });
}

bootstrap();
