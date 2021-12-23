import { Module } from '@nestjs/common';

import { browserProvider } from './providers/browser';
import { BrowserService } from './services/browser/browserService';

@Module({
  imports: [],
  providers: [browserProvider, BrowserService],
  exports: [BrowserService],
})
export class BrowserModule {}
