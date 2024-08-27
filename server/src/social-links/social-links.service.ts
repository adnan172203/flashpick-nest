import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, In, EntityManager } from 'typeorm';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { SocialLink } from './entities/social-link.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class SocialLinksService {
  constructor(private dataSource: DataSource) {}

  async createSocialLinks(createSocialLinkDto: CreateSocialLinkDto) {
    const { socialLinks } = createSocialLinkDto;

    return this.dataSource.transaction(async (transactionalEntityManager) => {
      const createdSocialLinks = await Promise.all(
        socialLinks.map((link) =>
          this.createSingleSocialLink(link, transactionalEntityManager)
        )
      );

      return createdSocialLinks;
    });
  }

  private async createSingleSocialLink(
    link: {
      userId: string;
      platformName: string;
      url: string;
    },
    transactionalEntityManager: EntityManager
  ): Promise<SocialLink> {
    const { userId, platformName, url } = link;

    const user = await transactionalEntityManager.find(User, {
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    try {
      return await transactionalEntityManager.save(SocialLink, {
        userId,
        platformName,
        url,
      });
    } catch (error) {
      if (error.code === '23505') {
        // Unique violation error code for PostgreSQL
        throw new ConflictException(
          `The URL ${url} is already associated with a social link for this user.`
        );
      }
      throw error;
    }
  }
}
