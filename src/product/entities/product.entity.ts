import { Entity, Column, ManyToOne, OneToMany, Index } from "typeorm";

import { BaseEntity } from "../../config/base.entity";
import { SellerEntity } from "../../user/entities/seller.entity";
import { ProductCategoryEntity } from "./product_category.entity";
import { ProductImageEntity } from "./product_image.entity";
import { ProductReviewEntity } from "./product_review.entity";
import { IsInt, Max, Min } from "class-validator";

@Entity("products")
export class ProductEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255, nullable: true })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({
    type: "decimal",
    precision: 12,
    scale: 2,
    unsigned: true,
    nullable: true,
  })
  price!: number;

  @Column({ type: "varchar", length: 100, unique: true, nullable: true })
  sku!: string;

  @Column({ type: "int", unsigned: true, nullable: true })
  stockQuantity!: number;

  @Column({ type: "decimal", precision: 8, scale: 3 })
  weight?: number;

  @Column({ type: "json" })
  dimensions?: { length: number; width: number; height: number };

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @Column({ type: "simple-array", nullable: true })
  tags?: string[];

  @IsInt()
  @Min(0)
  @Max(5)
  @Column({ type: "int" })
  ratingAvg?: number;

  @ManyToOne(() => SellerEntity, (seller) => seller.products)
  seller!: SellerEntity;

  @ManyToOne(() => ProductCategoryEntity, (category) => category.products)
  category!: ProductCategoryEntity;

  @OneToMany(() => ProductImageEntity, (image) => image.product)
  images!: ProductImageEntity[];

  @OneToMany(() => ProductReviewEntity, (review) => review.product)
  reviews!: ProductReviewEntity[];
}
