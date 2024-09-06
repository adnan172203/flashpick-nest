import { Controller, Get, Param } from '@nestjs/common';
import { UserManagementService } from './user-management.service';

@Controller('users')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Get('')
  findAll() {
    return this.userManagementService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userManagementService.findUserById(id);
  }
}
