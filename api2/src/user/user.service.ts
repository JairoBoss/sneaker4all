import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/role/entities/role.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({where: {id: id}});
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, fullName, isActive = true, roleId } = createUserDto;

    console.log(roleId);

    const user = new User();
    user.email = email;
    user.password = password;
    user.fullName = fullName;
    user.isActive = isActive;
    const role = await this.roleRepository.findOne({where: {id: roleId}});
    user.role = role;

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({where:{id: id}});
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const { email, password, fullName, isActive, roleId } = updateUserDto;

    if (email !== undefined) {
      user.email = email;
    }

    if (password !== undefined) {
      user.password = password;
    }

    if (fullName !== undefined) {
      user.fullName = fullName;
    }

    if (isActive !== undefined) {
      user.isActive = isActive;
    }

    user.role = { id: roleId } as Role;

    return this.userRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
