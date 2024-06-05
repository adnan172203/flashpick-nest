import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '../entities/user.entity';

const mockRepository = {
  create: jest.fn(),
  save: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  remove: jest.fn(),
  findOne: jest.fn(),
};
describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    jest.spyOn(bcrypt, 'hash').mockImplementation(async () => {
      return 'hashedPassword';
    });
    jest.spyOn(bcrypt, 'compare').mockImplementation(async () => {
      return true;
    });

    authService = module.get<AuthService>(AuthService);
    // userRepository = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should check signup method', () => {
    expect(authService.signUp).toBeDefined();
  });

  describe('signUp', () => {
    it('should create a new user when the email is not in use', async () => {
      mockRepository.findOne.mockResolvedValue(null);

      const signupParams = {
        name: 'Test User',
        email: 'test1@example.com',
        password: 'password123',
      };

      mockRepository.save.mockResolvedValue({
        id: 1,
        ...signupParams,
      });

      const result = await authService.signUp(signupParams);

      expect(result).toBeDefined();
      expect(mockRepository.save).toHaveBeenCalled();
    });
  });
});
