import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from 'src/product/product.module';
import { RoleModule } from 'src/role/role.module';
import { Product } from 'src/product/entities/product.entity';
import { Role } from 'src/role/entities/role.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Auction } from 'src/auction/entities/auction.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User, Role, Product, Sale, Auction])],
  // https://docs.nestjs.com/fundamentals/circular-dependency
  exports: [TypeOrmModule],
})
export class UserModule {}
