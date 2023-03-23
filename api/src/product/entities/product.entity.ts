import { Auction } from 'src/auction/entities/auction.entity';
import { Category } from 'src/category/entities/category.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'simple-array' })
  images: string[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Stock, (stock) => stock.products)
  stock: Stock;

  @ManyToOne(() => Sale, (sale) => sale.product)
  sales: Sale;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => Auction, (auction) => auction.product)
  auction: Auction;

  @Column({ type: 'varchar' })
  id_category: string;

  @Column({ type: 'varchar' })
  slug: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
