import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from "class-validator";

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

    @ApiProperty({ example: 'password', description: 'The password of the user' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}
