import { PaymentType } from "payment/dto/payment_method.dto";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { CustomerEntity } from "../../user/entities/customer.entity";

@Entity({ name: "payment_methods" })
export class PaymentMethodEntity extends BaseEntity {
	@ManyToOne(
		() => CustomerEntity,
		(customer) => customer.orders,
	)
	customer!: CustomerEntity;

	@Column({
		type: "enum",
		enum: PaymentType,
		default: PaymentType.CREDIT_CARD,
	})
	paymentType!: PaymentType;

	@Column({ nullable: true, length: 19 })
	cardNumber?: string;

	@Column({ nullable: true })
	cardholderName?: string;

	@Column({ nullable: true })
	isDefault?: boolean;
}
