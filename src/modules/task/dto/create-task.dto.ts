import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TaskStatus } from "../enums";
import { User } from "@modules/users";

export class CreateTaskDto {

    @ApiProperty({ example: 'Create CRUD task with NestJS', description: 'The of the task to be created' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Description for the task', description: 'The Description of the task to be created' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ enum: TaskStatus, example: TaskStatus.OPEN, description: 'The status of the task to be created' })
    @IsString()
    @IsNotEmpty()
    done: TaskStatus = TaskStatus.OPEN;

    @ApiProperty({ example: '1', description: 'The id of the user responsible for the task' })
    @IsNumber()
    @IsNotEmpty()
    userResponsible: User;
}
