import { createContext } from "react";
import { BUser } from "../entities/b-user.entity";
import { Education } from "../entities/education.entity";
import { Department } from "../entities/department.entity";
import { AppConfig } from "react-native";

//const api = fetch('198.162.4.115/api/b-users');

export type StaffContextType = {
//    apiurl: typeof api;
    staffEntries: BUser[] & Education[] & Department[],
    createStaff: Function,
    updateStaff: Function,
    deleteStaff: Function,
}

export const StaffContext = createContext<StaffContextType | null>(null);