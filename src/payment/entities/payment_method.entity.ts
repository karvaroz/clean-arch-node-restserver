import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "payment_methods" })
export class PaymentMethodEntity extends BaseEntity {}
