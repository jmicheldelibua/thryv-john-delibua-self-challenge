import { Auditable } from "@common/entities";
import { Column, Entity } from "typeorm";

@Entity('users')
export class User extends Auditable {

    @Column({ type: 'varchar', length: 100, nullable: false })
    names: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    lastName: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    email: string;
}
