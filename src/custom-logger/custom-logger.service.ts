import { Injectable, LogLevel, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLoggerService implements LoggerService {
  /** JSON形式に整形して標準出力に出力 */
  private write(level: LogLevel, ...args: unknown[]) {
    const time = new Date().toISOString();
    const context = args.pop(); // args の最後の要素にコンテキスト(ログを出力する処理の場所)が入る
    const message = args.shift(); // args の最初の要素をメッセージとする
    const params = args.length !== 0 ? args : undefined; // args の残りの要素をパラメータ(オプション)とする
    // JSON形式で標準出力に出力
    console.log(JSON.stringify({ time, level, context, message, params }));
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
