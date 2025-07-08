import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "product_reviews" })
export class ProductReviewEntity extends BaseEntity {}
