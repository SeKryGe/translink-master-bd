import { Body, Controller, Get, Post } from '@nestjs/common';
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

}
