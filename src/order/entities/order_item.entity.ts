import { OrderType } from "order/dto/order.dto";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "order_item" })
export class OrderItemEntity extends BaseEntity {
  @Column({ type: "varchar", length: 255 })
  productId!: string; // ProductEntity

  @Column({ type: "varchar", length: 255 })
  orderId!: string; // OrderEntity

  @Column({ type: "int", length: 255 })
  quantity!: number;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  price!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  subtotal!: number;
}
