import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CustomLoggerMiddleware } from './custom-logger.middleware';
import { CustomLoggerService } from './custom-logger.service';

@Module({
  providers: [CustomLoggerService],
})
export class CustomLoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomLoggerMiddleware).forRoutes('*');
  }
}
