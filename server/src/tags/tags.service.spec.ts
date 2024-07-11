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

  describe('Get all categories', () => {
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

  describe('Get tag by id', () => {
    it('should be defined', () => {
      expect(service.findTagById).toBeDefined();
    });

    describe('when request with id', () => {
      it('should fetch the specific tag', async () => {
        const expectedTag = new Tag();
        expectedTag.id = '1';
        expectedTag.name = 'Mock Tag';

        mockRepository.findOne.mockReturnValue(expectedTag);

        const result = await service.findTagById('1');

        expect(result).toEqual(expectedTag);
      });
    });
    describe('when tag does not exist', () => {
      it('should throw a NotFoundException', async () => {
        const tagId = '1';

        // mockRepository.findOne.mockResolvedValue(undefined);
        mockRepository.findOne.mockRejectedValue(new NotFoundException());

        await expect(service.findTagById(tagId)).rejects.toThrow(
          NotFoundException
        );

        expect(mockRepository.findOne).toHaveBeenCalledWith({
          where: { id: tagId },
          relations: ['products'],
        });
      });
    });
  });

  describe('update Tag', () => {
    describe('when update the tag id with params', () => {
      it('should update the tag', async () => {
        const newTag = new Tag();
        newTag.id = '1';
        newTag.name = 'Mock Tag';

        mockRepository.findOne.mockReturnValue(newTag);
        mockRepository.preload.mockResolvedValue(newTag);

        const updatedTag = { name: 'Updated Name' };

        const savedTag = await service.updateTag('1', updatedTag);

        expect(savedTag).toBeDefined();
      });
    });
    describe('otherwise', () => {
      it('should throw a NotFoundException if the category is not found', async () => {
        mockRepository.findOne.mockReturnValue(null);
        await expect(service.updateTag('456', {})).rejects.toThrow(
          NotFoundException
        );
      });
    });
  });
});
