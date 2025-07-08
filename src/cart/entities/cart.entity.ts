import { CustomerEntity } from "user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CartItemEntity } from "./cart_item.entity";

@Entity({ name: "cart" })
export class CartEntity extends BaseEntity {
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer!: CustomerEntity;

  @OneToMany(() => CartItemEntity, (item) => item.cart)
  items!: CartItemEntity[];
}
