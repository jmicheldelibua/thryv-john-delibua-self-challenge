import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@modules/users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,) { }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOneByUsername(username: string) {
    return this.usersRepository.findOne({ where: { username }, select: ['id', 'username', 'password'] });
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.save({ id, ...updateUserDto });
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
