import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class Sale {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => User, user => user.buyerSales)
  buyer: User;

  @ManyToOne(() => User, user => user.sellerSales)
  seller: User;

  @ManyToOne(() => Product, product => product.sales)
  product: Product;
}
