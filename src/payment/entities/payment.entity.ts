import { BaseEntity } from "../../config/base.entity";
import { Column, Entity } from "typeorm";

@Entity({ name: "payments" })
export class PaymentEntity extends BaseEntity {
  orderId!: string; // OrderEntity

  @Column()
  amount!: number;

  @Column()
  paymentDate!: Date;

  @Column()
  paymentMethod!: string; // PaymentMethodEntity

  @Column()
  transaction_id!: string;

  @Column()
  status!: string;
}
