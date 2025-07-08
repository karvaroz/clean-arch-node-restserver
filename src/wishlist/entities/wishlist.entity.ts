import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "wishlist" })
export class WishlistEntity extends BaseEntity {}
