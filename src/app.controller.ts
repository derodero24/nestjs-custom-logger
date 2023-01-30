import { Controller, Get, Logger } from '@nestjs/common'; // ①

import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name); // ②

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.logger.log('Logging at controller'); // ③
    return this.appService.getHello();
  }
}
