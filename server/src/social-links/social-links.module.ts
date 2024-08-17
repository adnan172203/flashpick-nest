import { Module } from '@nestjs/common';
import { SocialLinksService } from './social-links.service';
import { SocialLinksController } from './social-links.controller';
import { SocialLink } from './entities/social-link.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialLink, User])],
  controllers: [SocialLinksController],
  providers: [SocialLinksService],
})
export class SocialLinksModule {}
