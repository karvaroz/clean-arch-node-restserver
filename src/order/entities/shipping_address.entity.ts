import { CustomerEntity } from "../../user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: "shipping_addresses" })
export class ShippingAddressEntity extends BaseEntity {
	@ManyToOne(
		() => CustomerEntity,
		(customer) => customer.orders,
	)
	customer!: CustomerEntity;

	@Column({ type: "varchar", length: 255 })
	recipientName!: string;

	@Column({ type: "varchar", length: 255 })
	streetAddress!: string;

	@Column({ type: "varchar", length: 100 })
	city!: string;

	@Column({ type: "varchar", length: 100 })
	state!: string;

	@Column({ type: "varchar", length: 20 })
	zipCode?: string;

	@Column({ type: "varchar", length: 100 })
	country!: string;

	@Column({ type: "varchar", length: 15, nullable: true })
	phoneNumber?: string;

	@Column({ type: "boolean", default: false })
	isDefault!: boolean;
}
