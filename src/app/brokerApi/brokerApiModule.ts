import { Module } from '@nestjs/common';

import { BrokerModule } from '@shared/broker/brokerModule';

@Module({
  imports: [BrokerModule],
})
export class BrokerApiModule {}
