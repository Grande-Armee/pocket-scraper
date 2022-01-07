import TurndownService from 'turndown';

import { Turndown } from './types';

export const turndownFactory = async (): Promise<Turndown> => {
  return new TurndownService();
};
