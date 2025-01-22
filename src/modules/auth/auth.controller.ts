import { User } from '@modules/users';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from '@core/decorators';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req: Request & { user?: User }, @Body() loginData: LoginDto) {

        return req?.user ? this.authService.login(req?.user) : null;
    }


    @Post('auth/logout')
    logout(@Request() req) {
        return req.logout();
    }
}
