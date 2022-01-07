import { Module } from '@nestjs/common';

import { browserProvider } from './providers/browser';
import { turndownProvider } from './providers/turndown';
import { BrowserService } from './services/browser/browserService';

@Module({
  imports: [],
  providers: [browserProvider, BrowserService, turndownProvider],
  exports: [BrowserService],
})
export class BrowserModule {}
