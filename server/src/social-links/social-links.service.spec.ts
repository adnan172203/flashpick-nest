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

  describe('updateSocialLink', () => {
    it('should update social links successfully', async () => {
      const updateSocialLinkDto = {
        socialLinks: [
          {
            userId: 'user1',
            url: 'https://facebook.com/updateduser1',
          },
          {
            userId: 'user2',
            url: 'https://twitter.com/updateduser2',
          },
        ],
      };

      const transactionalEntityManager = {
        findOne: jest
          .fn()
          .mockResolvedValueOnce(mockUser1)
          .mockResolvedValueOnce({
            id: 'link1',
            userId: 'user1',
            url: 'https://facebook.com/user1',
          })
          .mockResolvedValueOnce(mockUser2)
          .mockResolvedValueOnce({
            id: 'link2',
            userId: 'user2',
            url: 'https://twitter.com/user2',
          }),
        save: jest
          .fn()
          .mockImplementation((entity, link) =>
            Promise.resolve({ ...link, id: 'updatedLink' })
          ),
      };

      (dataSource.transaction as jest.Mock).mockImplementation((cb) =>
        cb(transactionalEntityManager)
      );

      const result = await service.updateSocialLink(
        'link1',
        updateSocialLinkDto
      );
      console.log(result);

      expect(result).toHaveLength(2);

      expect(result[0]).toEqual({
        id: 'updatedLink',
        url: 'https://facebook.com/updateduser1',
      });
      expect(result[1]).toEqual({
        id: 'updatedLink',
        userId: 'user2',
        url: 'https://twitter.com/updateduser2',
      });

      expect(transactionalEntityManager.findOne).toHaveBeenCalledTimes(4);
      expect(transactionalEntityManager.save).toHaveBeenCalledTimes(2);
    });

    it('should throw NotFoundException when user is not found', async () => {
      const updateSocialLinkDto = {
        socialLinks: [
          {
            userId: 'nonexistentUser',
            url: 'https://facebook.com/updateduser',
          },
        ],
      };

      const transactionalEntityManager = {
        findOne: jest.fn().mockResolvedValue(null),
      };

      (dataSource.transaction as jest.Mock).mockImplementation((cb) =>
        cb(transactionalEntityManager)
      );

      await expect(
        service.updateSocialLink('link1', updateSocialLinkDto)
      ).rejects.toThrow(NotFoundException);
      expect(transactionalEntityManager.findOne).toHaveBeenCalledTimes(1);
    });

    it('should throw NotFoundException when social link is not found', async () => {
      const updateSocialLinkDto = {
        socialLinks: [
          {
            userId: 'user1',
            url: 'https://facebook.com/updateduser1',
          },
        ],
      };

      const transactionalEntityManager = {
        findOne: jest
          .fn()
          .mockResolvedValueOnce(mockUser1)
          .mockResolvedValueOnce(null),
      };

      (dataSource.transaction as jest.Mock).mockImplementation((cb) =>
        cb(transactionalEntityManager)
      );

      await expect(
        service.updateSocialLink('nonexistentLink', updateSocialLinkDto)
      ).rejects.toThrow(NotFoundException);
      expect(transactionalEntityManager.findOne).toHaveBeenCalledTimes(2);
    });

    it('should throw ConflictException when updating to an existing URL', async () => {
      const updateSocialLinkDto = {
        socialLinks: [
          {
            userId: 'user1',
            url: 'https://facebook.com/existinguser',
          },
        ],
      };

      const transactionalEntityManager = {
        findOne: jest
          .fn()
          .mockResolvedValueOnce(mockUser1)
          .mockResolvedValueOnce({
            id: 'link1',
            userId: 'user1',
            url: 'https://facebook.com/user1',
          }),
        save: jest.fn().mockRejectedValue({ code: '23505' }),
      };

      (dataSource.transaction as jest.Mock).mockImplementation((cb) =>
        cb(transactionalEntityManager)
      );

      await expect(
        service.updateSocialLink('link1', updateSocialLinkDto)
      ).rejects.toThrow(ConflictException);
      expect(transactionalEntityManager.findOne).toHaveBeenCalledTimes(2);
      expect(transactionalEntityManager.save).toHaveBeenCalledTimes(1);
    });
  });

  describe('deleteSocialLink', () => {
    it('should delete a social link successfully', async () => {
      const mockSocialLink = {
        id: '123',
        userId: 'user1',
        platformName: 'Facebook',
        url: 'https://facebook.com/user1',
      };

      mockRepository.findOneBy.mockResolvedValue(mockSocialLink);
      mockRepository.remove.mockResolvedValue(undefined);

      const result = await service.deleteSocialLink('link1');

      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 'link1' });
      expect(mockRepository.remove).toHaveBeenCalledWith(mockSocialLink);
      expect(result).toBe('Social link deleted successfully');
    });

    it('should throw NotFoundException for non-existing product', async () => {
      mockRepository.findOneBy.mockReturnValue(null);

      await expect(service.deleteSocialLink('456')).rejects.toThrow(
        NotFoundException
      );
    });

    it('should handle errors during deletion', async () => {
      const mockSocialLink = {
        id: 'link1',
        userId: 'user1',
        platformName: 'Facebook',
        url: 'https://facebook.com/user1',
      };

      mockRepository.findOneBy.mockResolvedValue(mockSocialLink);
      mockRepository.remove.mockRejectedValue(new Error('Database error'));

      await expect(service.deleteSocialLink('link1')).rejects.toThrow(
        'Database error'
      );
      expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 'link1' });
      expect(mockRepository.remove).toHaveBeenCalledWith(mockSocialLink);
    });
  });
});
