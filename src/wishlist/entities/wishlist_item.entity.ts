import { CustomerEntity } from "user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: "wishlist_item" })
export class WishlistItemEntity extends BaseEntity {
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer!: CustomerEntity;

  @Column({ type: "varchar", length: 255 })
  wishlistId!: string; // WishlistEntity

  @Column({ type: "varchar", length: 255 })
  productId!: string; // ProductEntity
}
