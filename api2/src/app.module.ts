import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Auction } from './auction/entities/auction.entity';
import { Category } from './category/entities/category.entity';
import { Exchange } from './exchange/entities/exchange.entity';
import { Product } from './product/entities/product.entity';
import { Role } from './role/entities/role.entity';
import { Sale } from './sale/entities/sale.entity';
import { Stock } from './stock/entities/stock.entity';
import { UserModule } from './user/user.module';
import { AuctionModule } from './auction/auction.module';
import { CategoryModule } from './category/category.module';
import { ExchangeModule } from './exchange/exchange.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { SaleModule } from './sale/sale.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'sneakerforall',
      username: 'postgres',
      password: '1',
      autoLoadEntities: true,
      
      entities: [User, Auction, Category, Exchange, Product, Role, Sale, Stock],
      synchronize: true,
    }),
    UserModule,
    AuctionModule,
    CategoryModule,
    ExchangeModule,
    ProductModule,
    RoleModule,
    SaleModule,
    StockModule    
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}
