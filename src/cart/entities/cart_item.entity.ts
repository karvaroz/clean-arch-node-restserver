import { BaseEntity } from "../../config/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "cart_items" })
export class CartItemEntity extends BaseEntity {
  @Column()
  cartId!: string; // CartEntity

  @Column()
  productId!: string; // ProductEntity

  @Column()
  quantity!: number;
}
