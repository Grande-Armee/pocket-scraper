import { BrokerModule as CommonBrokerModule } from '@grande-armee/pocket-common';
import { Module } from '@nestjs/common';

import { config } from '@shared/config';

@Module({
  imports: [
    CommonBrokerModule.forRoot({
      uri: config.broker.uri,
    }),
  ],
  exports: [CommonBrokerModule],
})
export class BrokerModule {}
