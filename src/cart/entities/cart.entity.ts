import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "cart" })
export class CartEntity extends BaseEntity {}
