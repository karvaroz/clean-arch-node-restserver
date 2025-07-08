import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "user/entities/user.entity";
import { OrderEntity } from "order/entities/order.entity";
import { ShippingAddressEntity } from "order/entities/shipping_address.entity";
import { PaymentMethodEntity } from "payment/entities/payment_method.entity";
import { ProductReviewEntity } from "product/entities/product_review.entity";
import { CartEntity } from "cart/entities/cart.entity";
import { WishlistEntity } from "wishlist/entities/wishlist.entity";
import {
	IsMobilePhone,
	IsNotEmpty,
	IsPhoneNumber,
	Matches,
} from "class-validator";

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {
	@OneToOne(
		() => UserEntity,
		(user) => user.customer,
	)
	@JoinColumn({ name: "id" })
	user!: UserEntity;

	@IsPhoneNumber(undefined, { message: "Invalid phone number format" })
	@Column({ type: "varchar", length: 50, nullable: true })
	phone?: string;

	@Column({ type: "date", nullable: true })
	birthDate?: Date;

	@Column({ type: "varchar", length: 20, unique: true, nullable: true })
	identification?: string;

	@Matches(/^[a-zA-Z]+$/, { message: "First name must contain only letters" })
	@Column({ type: "varchar", length: 50, nullable: true })
	firstName!: string | null;

	@IsNotEmpty({ message: "Last name is required" })
	@Column({ type: "varchar", length: 50 })
	lastName!: string;

	@OneToMany(
		() => ShippingAddressEntity,
		(address) => address.customer,
	)
	addresses?: ShippingAddressEntity[];

	@OneToMany(
		() => PaymentMethodEntity,
		(payment) => payment.customer,
	)
	paymentMethods?: PaymentMethodEntity[];

	@OneToMany(
		() => OrderEntity,
		(order) => order.customer,
	)
	orders?: OrderEntity[];

	@OneToMany(
		() => ProductReviewEntity,
		(review) => review.customer,
	)
	reviews?: ProductReviewEntity[];

	@OneToOne(
		() => CartEntity,
		(cart) => cart.customer,
	)
	shoppingCart?: CartEntity;

	@OneToMany(
		() => WishlistEntity,
		(wishlist) => wishlist.customer,
	)
	wishlists?: WishlistEntity[];
}
