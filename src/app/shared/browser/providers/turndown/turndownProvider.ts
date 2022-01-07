import { Provider } from '@nestjs/common';

import { turndownFactory } from './turndownFactory';

export const TURNDOWN = Symbol('TURNDOWN');

export const turndownProvider: Provider = {
  provide: TURNDOWN,
  useFactory: turndownFactory,
};
