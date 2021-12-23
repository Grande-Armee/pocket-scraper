import { Provider } from '@nestjs/common';

import { browserFactory } from './browserFactory';

export const BROWSER = Symbol('BROWSER');

export const browserProvider: Provider = {
  provide: BROWSER,
  useFactory: browserFactory,
};
