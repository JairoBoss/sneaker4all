import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { User } from 'src/user/entities/user.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Auction } from 'src/auction/entities/auction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category, Stock, User, Sale, Auction]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [TypeOrmModule],
})
export class ProductModule {}
