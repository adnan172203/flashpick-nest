import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SocialLinksService } from './social-links.service';
import { SocialLink } from './entities/social-link.entity';
import { User } from '../user/entities/user.entity';

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
  userId: '1',
  platformName: 'facebook',
  url: 'https://www.facebook.com/adnan.ahmed.172203',
};

describe('SocialLinksService', () => {
  let service: SocialLinksService;

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
      ],
    }).compile();

    service = module.get<SocialLinksService>(SocialLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Social Link', () => {
    describe('when createSocialLink is called', () => {
      it('should create a new social link', async () => {
        mockRepository.save.mockReturnValue(mockSocialLink);

        const savedLink = await service.createSocialLink(mockSocialLink);

        expect(savedLink).toBe(mockSocialLink);
      });
    });
  });
});
