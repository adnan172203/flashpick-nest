import { Injectable } from '@nestjs/common';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
import { SocialLink } from './entities/social-link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class SocialLinksService {
  constructor(
    @InjectRepository(SocialLink)
    private socialLinkRepository: Repository<SocialLink>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}
  createSocialLink(createSocialLinkDto: CreateSocialLinkDto) {
    const { userId, platformName, url } = createSocialLinkDto;

    const socialLink = this.socialLinkRepository.create({
      userId,
      platformName,
      url,
    });

    return this.socialLinkRepository.save(socialLink);
  }

  findAll() {
    return `This action returns all socialLinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialLink`;
  }

  update(id: number, updateSocialLinkDto: UpdateSocialLinkDto) {
    return `This action updates a #${id} socialLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialLink`;
  }
}
