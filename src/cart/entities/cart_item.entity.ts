import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "cart_items" })
export class CartItemEntity extends BaseEntity {}
