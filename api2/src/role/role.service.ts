import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  async findOne(id: string): Promise<Role> {
    return this.roleRepository.findOne({where:{id: id}});
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const { name, permits } = createRoleDto;

    const role = new Role();
    role.name = name;
    role.permits = permits;

    return this.roleRepository.save(role);
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const { name, permits } = updateRoleDto;

    const role = new Role();
    role.name = name;
    role.permits = permits;

    await this.roleRepository.update(id, role);
    return this.roleRepository.findOne({ where: { id: id } });
  }

  async delete(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
