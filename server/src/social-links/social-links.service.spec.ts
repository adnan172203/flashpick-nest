import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SocialLinksService } from './social-links.service';
import { SocialLink } from './entities/social-link.entity';
import { User } from '../user/entities/user.entity';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  preload: jest.fn(),
};

const mockSocialLink = {
  socialLinks: [
    {
      userId: 'user123',
      platformName: 'Facebook',
      url: 'https://facebook.com/user123',
    },
    {
      userId: 'user123',
      platformName: 'Twitter',
      url: 'https://twitter.com/user123',
    },
  ],
};

const mockUser = {
  id: 'user123',
};

const mockUser1 = {
  id: 'user1',
};

const mockUser2 = {
  id: 'user2',
};

describe('SocialLinksService', () => {
  let service: SocialLinksService;
  let dataSource: DataSource;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SocialLinksService,
        {
          provide: getRepositoryToken(SocialLink),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
        {
          provide: DataSource,
          useValue: {
            transaction: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SocialLinksService>(SocialLinksService);
    dataSource = module.get<DataSource>(DataSource);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createSocialLinks', () => {
    it('should create social links successfully', async () => {
      const createSocialLinkDto = {
        socialLinks: [
          {
            userId: 'user1',
            platformName: 'Facebook',
            url: 'https://facebook.com/user1',
          },
          {
            userId: 'user2',
            platformName: 'Twitter',
            url: 'https://twitter.com/user2',
          },
        ],
      };

      const transactionalEntityManager = {
        find: jest.fn().mockResolvedValue([mockUser]),
        findOne: jest
          .fn()
          .mockResolvedValue([createSocialLinkDto.socialLinks[0].url]),
        // save: jest.fn().mockImplementation((link) => Promise.resolve(link)),
        save: jest.fn().mockReturnValue(mockSocialLink),
      };

      (dataSource.transaction as jest.Mock).mockImplementation((cb) =>
        cb(transactionalEntityManager)
      );

      // mockRepository.findOne.mockResolvedValue(mockUser);

      const result = await service.createSocialLinks(mockSocialLink);

      expect(result[0]).toEqual(mockSocialLink);

      expect(transactionalEntityManager.find).toHaveBeenCalledTimes(2);

      expect(transactionalEntityManager.save).toHaveBeenCalledTimes(2);
    });
  });
});
