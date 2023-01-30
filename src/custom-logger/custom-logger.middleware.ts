import { randomUUID } from 'node:crypto';

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { storage } from './storage';

@Injectable()
export class CustomLoggerMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    // ユニークなIDを生成
    const requestId = randomUUID();

    // AsyncLocalStorage に リクエストID を保存
    storage.run(requestId, next, undefined);
  }
}
