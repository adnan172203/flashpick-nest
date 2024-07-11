import { Test, TestingModule } from '@nestjs/testing';
import { TagsService } from './tags.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Tag } from './entities/tag.entity';

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

const mockTag = {
  name: 'tag one',
};

describe('TagsService', () => {
  let service: TagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TagsService,
        {
          provide: getRepositoryToken(Tag),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<TagsService>(TagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Tag', () => {
    describe('When a tag param is passed', () => {
      it('should create a new tag', async () => {
        mockRepository.save.mockReturnValue(mockTag);

        const savedTag = await service.createTags(mockTag);

        expect(savedTag).toBe(mockTag);
      });
    });
  });

  describe('get all categories', () => {
    it('should be defined', () => {
      expect(service.findAllTags).toBeDefined();
    });

    describe('when request', () => {
      const tags = [
        { id: '1', name: 'tag 1' },
        { id: '2', name: 'tag 2' },
      ];
      it('should return all tags', async () => {
        mockRepository.find.mockReturnValue(tags);

        const result = await service.findAllTags();

        expect(result).toEqual(tags);
      });

      it('should return an empty array if no tags are found', async () => {
        mockRepository.find.mockReturnValue([]);

        const result = await service.findAllTags();

        expect(result).toEqual([]);
      });
    });
  });
});
