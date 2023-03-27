import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { User } from './user/entities/user.entity';
import { Role } from './role/entities/role.entity';
import { Category } from './category/entities/category.entity';
import { Exchange } from './exchange/entities/exchange.entity';
import { Product } from './product/entities/product.entity';
import { Sale } from './sale/entities/sale.entity';
import { Stock } from './stock/entities/stock.entity';
import { Auction } from './auction/entities/auction.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([User, Role, Category, Exchange, Product, Sale, Stock, Auction]),
  ],
})
export class AppModule  {
  
}
