export class WebsiteInfoResponseDto {
  public readonly title: string;
  public readonly content: string;
  public static readonly create: (props: WebsiteInfoResponseDto) => WebsiteInfoResponseDto;
}
