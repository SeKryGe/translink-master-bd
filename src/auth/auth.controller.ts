import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private auth:AuthService) {}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string}> {
        return this.auth.signUp(signUpDto)
    }

    @Post('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string}> {
        return this.auth.login(loginDto)
    }

    @Get(':id/name')
  async getUserName(@Param('id') userId: string): Promise<string> {
    const userName = await this.auth.getUserName(userId);
    if (!userName) {
      throw new NotFoundException('User not found');
    }
    return userName;
  }

}
