import { User } from '@modules/users';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    login(@Request() req: Request & { user?: User }, @Body() loginData: LoginDto) {

        return req?.user ? this.authService.login(req?.user) : null;
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/logout')
    logout(@Request() req) {
        return req.logout();
    }
}
