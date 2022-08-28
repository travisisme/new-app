import { BUser } from "../entities/b-user.entity";
import { Education } from "../entities/education.entity";
import { Department } from "../entities/department.entity";

export interface IBUser {
    id?: number;
    acquireDay?: number;
    acquireMonth?: number;
    acquireYear?: number;
    Firstname: string;
    Surname: string;
    education: Education;
    department: Department
}

export interface IEducation {
    acquireDay?: number;
    acquireMonth?: number;
    acquireYear?: number;
    School: string;
    education: Education;
}

export interface IDepartment {
    departmentName: string;
    department: Department;
}

export type AppStackParamList ={
    StaffHomeScreen: undefined;
    AddStaffScreen: undefined;
    EditStaffScreen: {staffToEdit: BUser & Education & Department};
}