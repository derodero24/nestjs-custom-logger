import { Injectable, LogLevel, LoggerService } from '@nestjs/common';
import { storage } from './storage';

@Injectable()
export class CustomLoggerService implements LoggerService {
  /** JSON形式に整形して標準出力に出力 */
  private write(level: LogLevel, ...args: unknown[]) {
    const time = new Date().toISOString();
    const context = args.pop();
    const message = args.shift();
    const params = args.length !== 0 ? args : undefined;
    // AsyncLocalStorage から リクエストID を取得
    const requestId = storage.getStore();
    console.log(
      JSON.stringify({ time, level, requestId, context, message, params }),
    );
  }

  log(...args: unknown[]) {
    this.write('log', ...args);
  }

  warn(...args: unknown[]) {
    this.write('warn', ...args);
  }

  error(...args: unknown[]) {
    this.write('error', ...args);
  }
}
