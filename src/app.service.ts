import { Injectable, Logger } from '@nestjs/common'; // ①import

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name); // ②インスタンスを作成(引数がコンテキストとなる)

  getHello(): string {
    this.logger.log('Logging at service'); // ③logレベルのログを出力
    return 'Hello World!';
  }
}
