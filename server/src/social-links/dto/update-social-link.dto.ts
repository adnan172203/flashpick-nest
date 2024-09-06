// import { PartialType } from '@nestjs/mapped-types';
// import { CreateSocialLinkDto } from './create-social-link.dto';

// export class UpdateSocialLinkDto extends PartialType(CreateSocialLinkDto) {}

export class UpdateSocialLinkDto {
  socialLinks: {
    userId: string;
    url: string;
  }[];
}
