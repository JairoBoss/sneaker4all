import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { ProductModule } from 'src/product/product.module';
import { Stock } from './entities/stock.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Stock]), ProductModule],
  controllers: [StockController],
  providers: [StockService]
})
export class StockModule {}
