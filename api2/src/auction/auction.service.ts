import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';

@Injectable()
export class AuctionService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createAuctionDto: CreateAuctionDto): Promise<Auction> {
    const { name, description, price_point, duration, date, productId } = createAuctionDto;

    const auction = new Auction();
    auction.name = name;
    auction.description = description;
    const product = await this.productRepository.findOne({where: {id: productId}});
    auction.product = product;
    auction.price_point = price_point;
    auction.duration = duration;
    auction.date = date;

    return this.auctionRepository.save(auction);
  }

  findAll() {
    return this.auctionRepository.find();
  }

  findOne(id: string) {
    return this.auctionRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateAuctionDto: UpdateAuctionDto) {
    const { name, description, price_point, duration, date, productId } =
      updateAuctionDto;

    const auction = await this.auctionRepository.findOne({ where: { id: id } });
    auction.name = name;
    auction.description = description;
    auction.price_point = price_point;
    const product = await this.productRepository.findOne({where: {id: productId}});
    auction.product = product;
    auction.duration = duration;
    auction.date = date;

    return this.auctionRepository.save(auction);
  }

  async remove(id: string): Promise<void> {
    await this.auctionRepository.delete(id);
  }
}
