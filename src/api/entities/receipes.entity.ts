import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Receipes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  family: string;

  @Column()
  name: string;

  @Column({ type: "int" })
  originalGravity: number;

  @Column({ type: "int", nullable: true })
  finalGravity: number;

  @Column({ type: "decimal" })
  ibus: number;

  @Column({ type: "decimal", nullable: true })
  colorSrm: number;

  @Column({ type: "decimal", nullable: true })
  porcAlcohol: number;
}
