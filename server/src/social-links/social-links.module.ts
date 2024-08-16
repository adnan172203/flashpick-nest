import { Module } from '@nestjs/common';
import { SocialLinksService } from './social-links.service';
import { SocialLinksController } from './social-links.controller';

@Module({
  controllers: [SocialLinksController],
  providers: [SocialLinksService],
})
export class SocialLinksModule {}
