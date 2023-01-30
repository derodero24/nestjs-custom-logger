import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';

@Module({
  imports: [CustomLoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
