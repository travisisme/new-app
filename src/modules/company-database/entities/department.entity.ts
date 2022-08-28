import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { BUser } from './b-user.entity'

@Entity('department')
export class Department {
    @Column()
    departmentName: string;

    @OneToMany(type => BUser, b_user => b_user.department)
    department: Department
}