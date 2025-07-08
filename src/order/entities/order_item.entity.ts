import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { OrderEntity } from "./order.entity";
import { ProductEntity } from "product/entities/product.entity";

@Entity({ name: "order_item" })
export class OrderItemEntity extends BaseEntity {
  @ManyToOne(() => ProductEntity)
  product!: ProductEntity;

  @ManyToOne(() => OrderEntity, (order) => order.items)
  order!: OrderEntity;

  @Column({ type: "int", unsigned: true })
  quantity!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, unsigned: true })
  unitPrice!: number;

  @Column({ type: "decimal", precision: 12, scale: 2, unsigned: true })
  totalPrice!: number;
}
