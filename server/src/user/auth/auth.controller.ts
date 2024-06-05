import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(
    @Body() body: { name: string; email: string; password: string }
  ): Promise<string> {
    return this.authService.signUp(body);
  }
}
