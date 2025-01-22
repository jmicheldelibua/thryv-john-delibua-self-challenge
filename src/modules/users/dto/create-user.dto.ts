import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'John', description: 'The first name of the user' })
    @IsString()
    @IsNotEmpty()
    names: string;

    @ApiProperty({ example: 'Michel Delibua', description: 'The first name of the user' })
    @IsString()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ example: 'john.doe', description: 'The username of the user' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'P@ssw0rd123' })
    @IsString()
    @IsNotEmpty()
    @Length(6, 30, {
        message: 'The password must be between 6 and 30 characters.',
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,30}$/, {
        message:
            'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    })
    password: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}
