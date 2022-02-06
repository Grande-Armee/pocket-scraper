import {
  BrokerController,
  BrokerMessage,
  BrokerService,
  EventRoute,
  ResourceCreatedEvent,
} from '@grande-armee/pocket-common';

import { BrowserService } from '@shared/browser/services/browser/browserService';

import { WebsiteScrapedEvent } from '../../events/websiteScrapedEvent';
import { WebsiteInfoResponseDto } from '../../requests/websiteInfo';

@BrokerController()
export class BrowserBrokerController {
  public constructor(private readonly brokerService: BrokerService, private readonly browserService: BrowserService) {}

  @EventRoute(ResourceCreatedEvent.name)
  public async getWebsiteInfo(_: unknown, message: BrokerMessage): Promise<WebsiteInfoResponseDto> {
    const { data } = await this.brokerService.parseMessage(message);

    const { url } = data.payload;

    const websiteInfo = await this.browserService.getWebsiteInfo(url);

    const result = WebsiteInfoResponseDto.create({
      title: websiteInfo.title,
      content: websiteInfo.content,
    });

    await this.brokerService.publishEvent(
      new WebsiteScrapedEvent({
        title: websiteInfo.title,
        content: websiteInfo.content,
      }),
    );

    return result;
  }
}
