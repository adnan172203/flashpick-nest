import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  async findAllUsers() {
    return await this.userRepository.find({
      relations: ['socialLinks'],
    });
  }

  async findUserById(id: string) {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['socialLinks'],
    });
  }
}
