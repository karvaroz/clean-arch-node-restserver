import { CustomerEntity } from "../../user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { WishlistItemEntity } from "./wishlist_item.entity";

@Entity({ name: "wishlists" })
export class WishlistEntity extends BaseEntity {
	@ManyToOne(
		() => CustomerEntity,
		(customer) => customer.wishlists,
	)
	customer!: CustomerEntity;

	@OneToMany(
		() => WishlistItemEntity,
		(item) => item.wishlist,
	)
	items!: WishlistItemEntity[];

	@Column({ type: "varchar", length: 255 })
	name!: string;

	@Column({ type: "text", nullable: true })
	description?: string;

	@Column({ type: "boolean", default: false })
	isPublic!: boolean;

	@Column({ type: "boolean", default: false })
	isDefault!: boolean;
}
