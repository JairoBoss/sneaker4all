import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async runSeed() {
    const logger = new Logger('Bootstrap');

    // const admin = this.userRepository.create({
    //   email: 'admin@gmail.com',
    //   password: bcrypt.hashSync('A1b2c3', 10),
    //   roles: ['admin'],
    //   fullName: 'Jairo Esteban Martinez Portillo',
    // });

    // const seller = this.userRepository.create({
    //   email: 'daniel@gmail.com',
    //   password: bcrypt.hashSync('A1b2c3', 10),
    //   roles: ['seller'],
    //   fullName: 'Carlos daniel Valdez Mtz',
    // });

    // const userP = this.userRepository.create({
    //   email: 'harim@gmail.com',
    //   password: bcrypt.hashSync('A1b2c3', 10),
    //   roles: ['user'],
    //   fullName: 'Harim Catellanos',
    // });

    // const user = await this.userRepository.findOne({
    //   where: { email: admin.email },
    // });

    // if (user) throw new ForbiddenException();

    // await this.userRepository.save(admin);
    // await this.userRepository.save(seller);
    // await this.userRepository.save(userP);

    // logger.log('Seed executed');
    // return { message: 'Seed executed' };
  }
}
