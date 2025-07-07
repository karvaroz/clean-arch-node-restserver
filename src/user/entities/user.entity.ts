import { Column } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  CUSTOMER = "customer",
}

export class UserEntity extends BaseEntity {
  @Column({ type: "string", length: 100, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({ type: "varchar", length: 50 })
  firstName?: string;

  @Column({ type: "varchar", length: 50 })
  lastName?: string;

  @Column({ type: "boolean", default: true })
  isActive!: boolean;

  @Column({ type: "boolean", default: false })
  isEmailVerified!: boolean;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  role!: UserRole;
}
