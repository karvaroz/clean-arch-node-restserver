import { ProductEntity } from "product/entities/product.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "sellers" })
export class SellerEntity extends BaseEntity {
	@Column({ type: "varchar", length: 100 })
	businessName!: string;

	@Column({ type: "varchar", length: 50, unique: true })
	taxId!: string;

	@OneToMany(
		() => ProductEntity,
		(product) => product.seller,
	)
	products?: ProductEntity[];
}
