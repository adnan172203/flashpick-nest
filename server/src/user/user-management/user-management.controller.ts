import { Controller, Get } from '@nestjs/common';
import { UserManagementService } from './user-management.service';

@Controller('')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Get('users')
  findAll() {
    return this.userManagementService.findAllUsers();
  }
}
