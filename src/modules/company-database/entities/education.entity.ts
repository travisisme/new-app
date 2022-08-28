import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { BUser } from './b-user.entity';

@Entity()
export class Education{
    @Column({ default: new Date().getDate() })
    acquireDay: number;

    @Column({ default: new Date().getMonth() })
    acquireMonth: number;

    @Column({ default: new Date().getFullYear() })
    acquireYear: number;

    @Column()
    School: string;

    @JoinColumn()
    @OneToOne(type => BUser, b_user => b_user.education)
    education: Education

}