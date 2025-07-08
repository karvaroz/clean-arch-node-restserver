import { CustomerEntity } from "user/entities/customer.entity";
import { BaseEntity } from "../../config/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: "wishlist" })
export class WishlistEntity extends BaseEntity {
  @ManyToOne(() => CustomerEntity, (customer) => customer.orders)
  customer!: CustomerEntity;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "boolean", default: false })
  isPublic!: boolean;

  @Column({ type: "boolean", default: false })
  isDefault!: boolean;
}
