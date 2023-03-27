import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { Auction } from './entities/auction.entity';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auction, User, Product])],
  controllers: [AuctionController],
  providers: [AuctionService],
  exports: [TypeOrmModule],
})
export class AuctionModule {}
