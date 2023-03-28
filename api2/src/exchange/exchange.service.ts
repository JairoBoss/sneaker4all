import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { UpdateExchangeDto } from './dto/update-exchange.dto';
import { Exchange } from './entities/exchange.entity';

@Injectable()
export class ExchangeService {
  constructor(
    @InjectRepository(Exchange)
    private readonly exchangeRepository: Repository<Exchange>,
  ) {}
  create(createExchangeDto: CreateExchangeDto) {
    const { productRequesterId, productOwnerId} = createExchangeDto;

    const exchange = new Exchange();
    
    exchange.productRequester = {id: productRequesterId} as Product;    
    exchange.productOwner = {id: productOwnerId} as Product;        
    
    return this.exchangeRepository.save(exchange);
  }

  findAll() {
    return this.exchangeRepository.find();
  }

  findOne(id: string) {
    return this.exchangeRepository.find({where: {id: id}});
  }

  async update(id: string, updateExchangeDto: UpdateExchangeDto) {
    const { productRequesterId, productOwnerId} = updateExchangeDto;

    const exchange = await this.exchangeRepository.findOne({where: {id: id}});    
    exchange.productRequester = {id: productRequesterId} as Product;    
    exchange.productOwner = {id: productOwnerId} as Product;        
    
    return this.exchangeRepository.save(exchange);
  }

  async remove(id: string) {
    await this.exchangeRepository.delete(id);
  }
}
