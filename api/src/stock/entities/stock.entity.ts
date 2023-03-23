import { Product } from 'src/product/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Stock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, product => product.stock)
  products: Product;

  @Column({ type: 'numeric' })
  quantity: number;

  @Column({ type: 'numeric' })
  size: number;
}
