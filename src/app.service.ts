import { Injectable, Logger } from '@nestjs/common'; // ①import

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Logging at service');
    return 'Hello World!';
  }
}
