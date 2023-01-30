import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLoggerService } from './custom-logger/custom-logger.service'; // ①

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true, // ②
  });
  app.useLogger(app.get(CustomLoggerService)); // ③
  await app.listen(3000);
}
bootstrap();
