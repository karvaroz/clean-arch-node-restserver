import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: "product_images" })
export class ProductImageEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255 })
  url!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  altText?: string;

  @ManyToOne(() => ProductEntity, (product) => product.images)
  product!: ProductEntity;
}
