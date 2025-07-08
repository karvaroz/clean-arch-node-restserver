import { CustomerEntity } from "../../user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { ProductEntity } from "./product.entity";
import { IsInt, Max, Min } from "class-validator";

@Entity({ name: "product_reviews" })
export class ProductReviewEntity extends BaseEntity {
	@ManyToOne(
		() => CustomerEntity,
		(customer) => customer.orders,
	)
	customer!: CustomerEntity;

	@IsInt()
	@Min(0)
	@Max(5)
	@Column({ type: "int", width: 1 })
	rating!: number;

	@Column({ type: "text", nullable: true })
	comment?: string;

	@ManyToOne(
		() => ProductEntity,
		(product) => product.reviews,
	)
	product!: ProductEntity;
}
