import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Product, (product) => product.auction)
  product: Product;

  @Column({ type: 'numeric' })
  price_point: number;

  @Column({ default: false })
  closed: boolean;

  @ManyToOne(() => User, (user) => user.wonAuction)
  winner: User;

  @Column({ type: 'date' })
  duration: Date;

  @ManyToOne(() => User, (user) => user.blockedAuction)
  blocked: User;

  @Column({ type: 'date' })
  date: Date;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
