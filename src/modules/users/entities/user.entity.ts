import { Auditable } from "@common/entities";
import { BeforeInsert, BeforeUpdate, Column, Entity } from "typeorm";
import * as bcrypt from 'bcrypt';
@Entity('users')
export class User extends Auditable {

    @Column({ type: 'varchar', length: 100, nullable: false })
    names: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    lastName: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 100, nullable: false, select: false })
    password: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    email: string;

    @BeforeUpdate()
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, process.env.JWT_SALT_OR_ROUNDS);
    }
}
