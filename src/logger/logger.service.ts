import { Injectable, LogLevel, LoggerService } from '@nestjs/common';
import { storage } from './storage';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private write(level: LogLevel, ...args: unknown[]) {
    const time = new Date()
      .toISOString()
      .replaceAll('-', '/')
      .replace('T', ' ')
      .replace(/\..+/, '');
    const context = args.pop();
    const message = args.shift();
    const requestId = storage.getStore();
    console.log(
      requestId
        ? `${time} ${level.toUpperCase()} [${requestId}] [${context}] ${message}`
        : `${time} ${level.toUpperCase()} [${context}] ${message}`,
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
