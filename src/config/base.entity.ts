import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  DeleteDateColumn,
} from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    nullable: true,
  })
  updatedAt?: Date;

  @Column({ type: "boolean", default: false })
  isDeleted?: boolean;

  @DeleteDateColumn({ name: "delete_at", type: "timestamp", nullable: true })
  deletedAt?: Date;
}
