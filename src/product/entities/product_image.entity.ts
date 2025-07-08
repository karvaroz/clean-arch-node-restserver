import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "product_images" })
export class ProductImageEntity extends BaseEntity {}
