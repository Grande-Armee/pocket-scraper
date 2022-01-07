import { LoggerModule as CommonLoggerModule } from '@grande-armee/pocket-common';
import { Global, Module } from '@nestjs/common';

import { config } from '@shared/config';

@Global()
@Module({
  imports: [
    CommonLoggerModule.forRoot({
      logLevel: config.logger.logLevel,
      prettifyLogs: config.logger.prettifyLogs,
    }),
  ],
  exports: [CommonLoggerModule],
})
export class LoggerModule {}
