import { Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { OrderType } from "order/dto/order.dto";
import { CustomerEntity } from "user/entities/customer.entity";
import { OrderItemEntity } from "./order_item.entity";
import { PaymentEntity } from "payment/entities/payment.entity";
import { ShippingAddressEntity } from "./shipping_address.entity";
import { ShippingMethodEntity } from "./shipping_method.entity";

export class OrderEntity extends BaseEntity {
  @Column({ type: "datetime", length: 255 })
  orderDate!: Date;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  subtotal!: number;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  tax!: number;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  shippingCost!: number;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  total!: number;

  @Column({
    type: "enum",
    enum: OrderType,
    default: OrderType.PROCESSING,
  })
  status!: OrderType;

  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer!: CustomerEntity;

  @OneToMany(() => OrderItemEntity, (item) => item.order)
  items!: OrderItemEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.orderId)
  payments!: PaymentEntity[];

  @ManyToOne(() => ShippingAddressEntity)
  shippingAddress!: ShippingAddressEntity;

  @ManyToOne(() => ShippingMethodEntity)
  shippingMethod!: ShippingMethodEntity;
}
