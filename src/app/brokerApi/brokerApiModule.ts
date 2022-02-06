import { ClsModule } from '@grande-armee/pocket-common';
import { Module } from '@nestjs/common';

import { DomainModule } from '@domain/domainModule';
import { BrokerModule } from '@shared/broker/brokerModule';

import { BrowserBrokerModule } from './browser/browserBrokerModule';

@Module({
  imports: [BrokerModule, DomainModule, ClsModule, BrowserBrokerModule],
})
export class BrokerApiModule {}
