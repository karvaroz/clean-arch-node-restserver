import { OrderEntity } from "order/entities/order.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { PaymentMethodEntity } from "./payment_method.entity";

@Entity({ name: "payments" })
export class PaymentEntity extends BaseEntity {
  @ManyToOne(() => OrderEntity, (order) => order.payments)
  order!: OrderEntity;

  @ManyToOne(() => PaymentMethodEntity)
  paymentMethod!: PaymentMethodEntity;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  amount!: number;

  @Column({ type: "varchar", length: 50 })
  currency!: string;

  @Column()
  paymentDate!: Date;

  @Column({ type: "varchar", length: 100, nullable: true })
  transactionId!: string | null;

  @Column({ type: "jsonb", nullable: true })
  processorResponse: any;

  @Column({ type: "varchar", length: 50 })
  status!: "pending" | "completed" | "failed" | "refunded";
}
