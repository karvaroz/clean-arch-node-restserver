import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "product_categories" })
export class ProductCategoryEntity extends BaseEntity {}
