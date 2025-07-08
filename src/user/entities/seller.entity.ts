import { BaseEntity } from "../../config/base.entity";
import { Entity } from "typeorm";

@Entity({ name: "sellers" })
export class SellerEntity extends BaseEntity {}
