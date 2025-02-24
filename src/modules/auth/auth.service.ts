import { comparePassword } from '@core/utils';
import { User, UsersService } from '@modules/users';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<User | null> {
        const user = await this.usersService.findOneByUsername(username);

        try {
            const match: boolean = await comparePassword(pass, user?.password || '');
            if (user && match) {
                const { password, ...result } = user;
                return result as User;
            }
            return null;
        } catch (error) {
            Logger.log(error, 'AuthService');
            return null;
        }

    }

    login(user: User) {
        const payload = { username: user.username, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
