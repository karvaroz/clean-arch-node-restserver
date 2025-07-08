import { Column, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { OrderType } from "order/dto/order.dto";
import { CustomerEntity } from "user/entities/customer.entity";

export class OrderEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255 })
  customerId!: string; // customerEntity

  @Column({ type: "datetime", length: 255 })
  orderDate!: Date;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  total!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  shippingCost!: number;

  @Column({
    type: "enum",
    enum: OrderType,
    default: OrderType.PROCESSING,
  })
  status!: OrderType;
}
