import puppeteer from 'puppeteer';

import { Browser } from './types';

export const browserFactory = async (): Promise<Browser> => {
  // eslint-disable-next-line import/no-named-as-default-member
  return puppeteer.launch({
    args: ['--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-first-run', '--no-sandbox'],
    headless: true,
  });
};
