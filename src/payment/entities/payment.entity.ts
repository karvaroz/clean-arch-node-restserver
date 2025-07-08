import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "payments" })
export class PaymentEntity extends BaseEntity {}
