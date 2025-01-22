import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Auditable } from "@common/entities";
import { TaskStatus } from "../enums";
import { User } from "@modules/users";

@Entity('tasks')
export class Task extends Auditable {

    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: 200, nullable: false })
    description: string;

    @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.OPEN })
    status: TaskStatus;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'user_responsible_id' })
    userResponsible: User
}
