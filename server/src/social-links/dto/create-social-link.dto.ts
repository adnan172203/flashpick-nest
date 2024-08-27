export class CreateSocialLinkDto {
  socialLinks: {
    userId: string;
    platformName: string;
    url: string;
  }[];
}
