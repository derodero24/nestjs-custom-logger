import { Controller, Get, Headers, Logger } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers('request-id') requestId: string): string {
    this.logger.log('Logging at controller', { requestId });
    return this.appService.getHello();
  }
}
