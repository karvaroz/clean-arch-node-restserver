import { Column, Entity, Index, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { OrderStatus } from "../dto/order.dto";
import { CustomerEntity } from "../../user/entities/customer.entity";
import { OrderItemEntity } from "./order_item.entity";
import { PaymentEntity } from "../../payment/entities/payment.entity";
import { ShippingAddressEntity } from "./shipping_address.entity";
import { ShippingMethodEntity } from "./shipping_method.entity";

@Entity({ name: "orders" })
export class OrderEntity extends BaseEntity {
  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  orderDate!: Date;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  subtotal!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, unsigned: true })
  tax!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, unsigned: true })
  shippingCost!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, unsigned: true })
  total!: number;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDIND,
  })
  status!: OrderStatus;

  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer!: CustomerEntity;

  @OneToMany(() => OrderItemEntity, (item) => item.order)
  items!: OrderItemEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.order)
  payments!: PaymentEntity[];

  @ManyToOne(() => ShippingAddressEntity)
  shippingAddress!: ShippingAddressEntity;

  @ManyToOne(() => ShippingMethodEntity)
  shippingMethod!: ShippingMethodEntity;
}
