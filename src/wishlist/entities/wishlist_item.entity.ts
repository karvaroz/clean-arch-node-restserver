import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "wishlist_item" })
export class WishlistItemEntity extends BaseEntity {}
