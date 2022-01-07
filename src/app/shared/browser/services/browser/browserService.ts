import { BeforeApplicationShutdown, Inject, Injectable } from '@nestjs/common';

import { BROWSER, Browser, WebsiteInfo } from '@shared/browser/providers/browser';
import { Turndown, TURNDOWN } from '@shared/browser/providers/turndown';

@Injectable()
export class BrowserService implements BeforeApplicationShutdown {
  public constructor(
    @Inject(BROWSER) private readonly browser: Browser,
    @Inject(TURNDOWN) private readonly turndown: Turndown,
  ) {}

  public async beforeApplicationShutdown(): Promise<void> {
    await this.browser.close();
  }

  public async getWebsiteInfo(url: string): Promise<WebsiteInfo> {
    const page = await this.browser.newPage();

    await page.goto(url);

    await page.addScriptTag({
      url: 'https://cdn.jsdelivr.net/npm/@mozilla/readability@0.4.1/Readability.js',
    });

    const { title, content } = await page.evaluate(() => {
      // TODO: move to a js file
      // @ts-expect-error Readability is loaded through the script above from CDN
      const article = new Readability(document).parse();

      return article;
    });

    await page.close();

    return {
      title,
      content: this.turndown.turndown(content),
    };
  }
}
