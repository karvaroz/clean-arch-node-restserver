import { Column, Entity, OneToOne } from "typeorm";

import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../user/entities/customer.entity";
import { UserRole } from "../dto/user.dto";
import { IsEmail } from "class-validator";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @IsEmail()
  @Column({ type: "varchar", length: 100, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 255 })
  passwordHash!: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @Column({ type: "boolean", default: false })
  emailVerified!: boolean;

  @Column({ type: "enum", enum: UserRole, nullable: false })
  role!: UserRole;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}
