import { CustomerEntity } from "user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: "cart" })
export class CartEntity extends BaseEntity {
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer!: CustomerEntity;
}
