import { Test, TestingModule } from '@nestjs/testing';
import { UserManagementService } from './user-management.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { NotFoundException } from '@nestjs/common';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  findUserById: jest.fn(),
};

const mockUsers = [
  {
    id: 1,
    name: 'testuser1',
    email: 'testuser1@example.com',
    password: 'password1',
    role: 'user',
    address: '123 Main St',
    phoneNumber: '123-456-7890',
    socialLinks: [
      {
        id: 1,
        platform: 'Facebook',
        link: 'https://www.facebook.com/testuser1',
      },
      {
        id: 2,
        platform: 'Twitter',
        link: 'https://www.twitter.com/testuser1',
      },
    ],
  },
  {
    id: 2,
    name: 'testuser1',
    email: 'testuser1@example.com',
    password: 'password1',
    role: 'user',
    address: '123 Main St',
    phoneNumber: '123-456-7890',
    socialLinks: [
      {
        id: 1,
        platform: 'Facebook',
        link: 'https://www.facebook.com/testuser1',
      },
      {
        id: 2,
        platform: 'Twitter',
        link: 'https://www.twitter.com/testuser1',
      },
    ],
  },
];

describe('UserManagementService', () => {
  let service: UserManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserManagementService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UserManagementService>(UserManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAllUsers', () => {
    it('should be defined', () => {
      expect(service.findAllUsers).toBeDefined();
    });

    it('should return an array of users with social links', async () => {
      mockRepository.find.mockReturnValue(mockUsers);

      const result = await service.findAllUsers();

      expect(result).toEqual(mockUsers);
    });
  });

  describe('findUserById', () => {
    it('should return a user by id with social links', async () => {
      mockRepository.findOne.mockReturnValue(mockUsers);

      const result = await service.findUserById('1');

      expect(result).toEqual(mockUsers);
      expect(mockRepository.findOne).toHaveBeenCalledWith({
        where: { id: '1' },
        relations: ['socialLinks'],
      });
    });

    it('should return null if user is not found', async () => {
      mockRepository.findOne.mockReturnValue(null);

      const result = await service.findUserById('nonexistent');

      expect(result).toBeNull();
    });
  });

  describe('update User Information', () => {
    describe('when provided new user information', () => {
      it('should update the user information', async () => {
        const newUser = new User();
        newUser.id = '1';
        newUser.name = 'Mock User';
        newUser.email = 'Mock Description';
        newUser.address = '123 Main St';

        mockRepository.findOne.mockReturnValue(newUser);
        mockRepository.update.mockResolvedValue(newUser);

        const updatedUser = { name: 'Updated Name' };

        const savedUser = await service.updateUser('1', updatedUser);

        expect(savedUser.id).toBeDefined();
      });
    });
    describe('otherwise', () => {
      it('should throw a NotFoundException if the user is not found', async () => {
        mockRepository.findOne.mockReturnValue(null);
        await expect(service.updateUser('456', {})).rejects.toThrow(
          NotFoundException
        );
      });
    });
  });
});
