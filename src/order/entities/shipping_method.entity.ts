import { BaseEntity } from "../../config/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "shipping_methods" })
export class ShippingMethodEntity extends BaseEntity {
	@Column({ type: "varchar", length: 255 })
	name!: string;

	@Column({ type: "decimal", precision: 12, scale: 2, unsigned: true })
	cost!: number;

	@Column({ type: "text", nullable: true })
	description?: string;
}
