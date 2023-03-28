import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { name, description, images, categoryId, userId, slug, active} = createProductDto;

    const product = new Product();
    product.name = name;
    product.description = description;
    product.images = images;
    const category = await this.categoryRepository.findOne({where: {id: categoryId}});
    product.category = category;
    const user = await this.userRepository.findOne({where: {id: userId}});
    product.user = user;
    product.slug = slug;
    product.active = active;
    
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }
  
  findOne(id: string) {
    return this.productRepository.find({where: {id: id}});
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { name, description, images, categoryId, userId, slug, active} = updateProductDto;

    const product = await this.productRepository.findOne({where: {id: id}});
    product.name = name;
    product.description = description;
    product.images = images;
    product.category = {id: categoryId} as Category;
    product.user = {id: userId} as User;
    product.slug = slug;
    product.active = active;
    
    return this.productRepository.save(product);
  }

  async remove(id: string) : Promise<void>  {
    await this.productRepository.delete(id);
  }
}
