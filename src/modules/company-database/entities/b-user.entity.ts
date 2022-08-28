import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Education } from './education.entity';
import { Department } from './department.entity';

@Entity('b_user')
export class BUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: new Date().getDate() })
    acquireDay: number;

    @Column({ default: new Date().getMonth() })
    acquireMonth: number;

    @Column({ default: new Date().getFullYear() })
    acquireYear: number;

    @Column()
    Firstname: string;

    @Column()
    Surname: string;

    @OneToOne(type => Education, education => education.education)
    education: Education;

    @ManyToOne(type => Department, department => department.department)
    department: Department;
}