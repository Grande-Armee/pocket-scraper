import { IntegrationEvent } from '@grande-armee/pocket-common/dist/domain/shared';
export interface WebsiteScrapedEventPayload {
  readonly title: string;
  readonly content: string;
}
export declare class WebsiteScrapedEvent extends IntegrationEvent<WebsiteScrapedEventPayload> {
  public readonly name = 'pocket.scraper.browser.websiteScraped';
}
