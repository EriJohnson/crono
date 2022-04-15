import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { Public } from './public.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
