import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "user/entities/user.entity";
import { OrderEntity } from "order/entities/order.entity";

@Entity({ name: "customers" })
export class CustomerEntity extends BaseEntity {
  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity;

  @Column({ type: "varchar", length: 50, nullable: true })
  phoneNumber?: string;

  @Column({ type: "date", nullable: true })
  birthDate?: Date;

  @Column({ type: "varchar", length: 20, unique: true, nullable: true })
  identification?: string | null;

  @Column({ type: "varchar", length: 50 })
  firstName?: string;

  @Column({ type: "varchar", length: 50 })
  lastName?: string;

  // @OneToMany(() => AddressEntity, (address) => address.customer)
  // addresses: AddressEntity[];

  // @OneToMany(() => PaymentMethodEntity, (payment) => payment.customer)
  // paymentMethods: PaymentMethodEntity[];

  // @OneToMany(() => OrderEntity, (order) => order.customer)
  // orders: OrderEntity[];

  // @OneToMany(() => ReviewEntity, (review) => review.customer)
  // reviews: ReviewEntity[];

  // @OneToOne(() => ShoppingCartEntity, (cart) => cart.customer)
  // shoppingCart: ShoppingCartEntity;

  // @OneToMany(() => WishlistEntity, (wishlist) => wishlist.customer)
  // wishlists: WishlistEntity[];
}
