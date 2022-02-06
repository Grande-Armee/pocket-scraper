import { ClsModule } from '@grande-armee/pocket-common';
import { Module } from '@nestjs/common';

import { BrokerModule } from '@shared/broker/brokerModule';
import { BrowserModule } from '@shared/browser/browserModule';

import { BrowserBrokerController } from './controllers/browser/browserController';

@Module({
  imports: [BrokerModule, ClsModule, BrowserModule],
  providers: [BrowserBrokerController],
})
export class BrowserBrokerModule {}
