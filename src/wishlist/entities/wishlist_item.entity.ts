import { BaseEntity } from "../../config/base.entity";
import { Entity, ManyToOne } from "typeorm";
import { WishlistEntity } from "./wishlist.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({ name: "wishlist_items" })
export class WishlistItemEntity extends BaseEntity {
  @ManyToOne(() => WishlistEntity, (wishlist) => wishlist.items)
  wishlist!: WishlistEntity;

  @ManyToOne(() => ProductEntity)
  product!: ProductEntity;
}
