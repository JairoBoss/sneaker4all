import { Auction } from 'src/auction/entities/auction.entity';
import { Product } from 'src/product/entities/product.entity';
import { Role } from 'src/role/entities/role.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', select: false })
  password: string;

  @Column({ type: 'text' })
  fullName: string;

  @Column({ type: 'bool', default: true })
  isActive: boolean;

  @OneToMany(() => Role, role => role.users)
  role: Role;
  
  @OneToMany(() => Product, product => product.user)
  products: Product;
  
  @OneToMany(() => Sale, sale => sale.buyer)
  buyerSales: Sale;
  
  @OneToMany(() => Sale, sale => sale.seller)
  sellerSales: Sale;
  
  @OneToMany(() => Auction, auction => auction.winner)
  wonAuction: Auction;
  
  @OneToMany(() => Auction, auction => auction.blocked)
  blockedAuction: Auction;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @BeforeInsert()
  checkEmail() {
    this.email = this.email.toLocaleLowerCase().trim();
  }

  @BeforeUpdate()
  checkEmailUpadte() {
    this.checkEmail();
  }
}
