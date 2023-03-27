import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { Exchange } from './entities/exchange.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exchange, Product])],
  controllers: [ExchangeController],
  providers: [ExchangeService],
  exports: [TypeOrmModule],
})
export class ExchangeModule {}
