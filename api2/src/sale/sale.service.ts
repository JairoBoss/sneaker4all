import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createSaleDto: CreateSaleDto) {
    const { date, buyerId, sellerId, productId } = createSaleDto;

    const sale = new Sale();
    sale.date = date;
    const buyer = await this.userRepository.findOne({where: {id: buyerId}});
    sale.buyer = buyer;
    const seller = await this.userRepository.findOne({where: {id: sellerId}});
    sale.seller = seller;
    const product = await this.productRepository.findOne({where: {id: productId}});    
    sale.product = product;

    return this.saleRepository.save(sale);
  }

  findAll() {
    return this.saleRepository.find();
  }

  findOne(id: string) {
    return this.saleRepository.find({ where: { id: id } });
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    const { date, buyerId, sellerId, productId } = updateSaleDto;

    const sale = await this.saleRepository.findOne({where: {id: id}});
    sale.date = date;

    sale.buyer = { id: buyerId } as User;
    sale.seller = { id: sellerId } as User;
    sale.product = {id: productId} as Product;

    return this.saleRepository.save(sale);
  }

  async remove(id: string) {
    await this.saleRepository.delete(id);
  }
}
