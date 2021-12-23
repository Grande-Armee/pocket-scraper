import { Module } from '@nestjs/common';

import { BrokerApiModule } from './brokerApi/brokerApiModule';
import { DomainModule } from './domain/domainModule';
import { BrokerModule } from './shared/broker/brokerModule';
import { BrowserModule } from './shared/browser/browserModule';
import { LoggerModule } from './shared/logger/loggerModule';

@Module({
  imports: [BrokerModule, LoggerModule, DomainModule, BrokerApiModule, BrowserModule],
})
export class AppModule {}
