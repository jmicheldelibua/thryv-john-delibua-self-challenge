import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty({ example: 'john.doe', description: 'The username of the user' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'your password', description: 'The password of the user' })
    @IsString()
    @IsNotEmpty()
    password: string;
}