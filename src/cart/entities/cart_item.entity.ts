import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { CartEntity } from "./cart.entity";
import { ProductEntity } from "product/entities/product.entity";

@Entity({ name: "cart_items" })
export class CartItemEntity extends BaseEntity {
  @ManyToOne(() => CartEntity, (cart) => cart.items)
  cart!: CartEntity;

  @ManyToOne(() => ProductEntity)
  product!: ProductEntity;

  @Column()
  quantity!: number;
}
