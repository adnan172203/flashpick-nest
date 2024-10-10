import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto, SigninDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorators';
import { AuthType } from './enums/auth-type.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Auth(AuthType.None)
  @Post('signup')
  signUp(
    @Body() body: SignupDto
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authService.signUp(body);
  }

  @Auth(AuthType.None)
  @Post('signin')
  signIn(
    @Body() body: SigninDto
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.authService.signIn(body);
  }
}
