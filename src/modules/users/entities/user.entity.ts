import { Auditable } from "@common/entities";
import { BeforeInsert, BeforeUpdate, Column, Entity } from "typeorm";
import { hashPassword } from "@core/utils";
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

    // This decorators are used to hash the password before inserting or updating into the database
    @BeforeUpdate()
    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await hashPassword(this.password);
        }
    }
}
