import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { BaseEntity } from "../../config/base.entity";
import { SellerEntity } from "user/entities/seller.entity";
import { ProductCategoryEntity } from "./product_category.entity";
import { ProductImageEntity } from "./product_image.entity";

@Entity("products")
export class ProductEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  price!: number;

  @Column({ type: "varchar", length: 100, unique: true })
  sku!: string;

  @Column({ type: "int" })
  stockQuantity!: number;

  @Column({ type: "decimal", precision: 8, scale: 3 })
  weight?: number;

  @Column({ type: "jsonb" })
  dimensions?: { length: number; width: number; height: number };

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @ManyToOne(() => SellerEntity, (seller) => seller.products)
  seller!: SellerEntity;

  @ManyToOne(() => ProductCategoryEntity, (category) => category.products)
  category!: ProductCategoryEntity;

  @OneToMany(() => ProductImageEntity, (image) => image.product)
  images!: ProductImageEntity[];
}
