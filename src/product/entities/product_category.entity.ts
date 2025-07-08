import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({ name: "product_categories" })
export class ProductCategoryEntity extends BaseEntity {
	@Column({ type: "varchar", length: 100 })
	name!: string;

	@Column({ type: "text", nullable: true })
	description?: string;

	@OneToMany(
		() => ProductEntity,
		(product) => product.category,
	)
	products!: ProductEntity[];
}
