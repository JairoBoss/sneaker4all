import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private readonly stockRepository: Repository<Stock>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createStockDto: CreateStockDto) {
    const { productId, quantity, size} = createStockDto;

    const stock = new Stock();
    stock.quantity = quantity;
    stock.size = size;
    const product = await this.productRepository.findOne({where: {id: productId}});
    stock.product = product;

    return this.stockRepository.save(stock);
  }

  findAll() {
    return this.stockRepository.find();
  }

  findOne(id: string) {
    return this.stockRepository.find({where: {id: id}});
  }

  async update(id: string, updateStockDto: UpdateStockDto) {
    const {quantity, size} = updateStockDto;

    const stock = await this.stockRepository.findOne({where: {id: id}});
    stock.quantity = quantity;
    stock.size = size;

    return this.stockRepository.save(stock);
  }

  async remove(id: string) {
    await this.stockRepository.delete(id);
  }
}
