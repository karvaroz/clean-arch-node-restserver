import { OrderEntity } from "../../order/entities/order.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { PaymentMethodEntity } from "./payment_method.entity";
import { PaymentStatus } from "../dto/payment.dto";

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

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  paymentDate!: Date;

  @Column({ type: "varchar", length: 100, nullable: true })
  transactionId!: string | null;

  @Column({ type: "json", nullable: true })
  processorResponse: any;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status!: PaymentStatus;
}
