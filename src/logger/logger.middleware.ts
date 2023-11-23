import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';

import { Injectable, NestMiddleware } from '@nestjs/common';

import type { NextFunction, Request, Response } from 'express';

export const storage = new AsyncLocalStorage<string>();

@Injectable()
export class CustomLoggerMiddleware implements NestMiddleware {
  use(_req: Request, _res: Response, next: NextFunction) {
    // Generate unique ID
    const requestId = randomUUID().split('-').pop() ?? '';
    // Save to AsyncLocalStorage
    storage.run(requestId, next, 'route');
  }
}
