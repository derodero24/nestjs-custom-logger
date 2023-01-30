import { randomUUID } from 'node:crypto';

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CustomLoggerMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    // ユニークなIDを生成
    const requestId = randomUUID();
    // とりあえず、リクエストヘッダに保存
    req.headers['request-id'] = requestId;
    next();
  }
}
