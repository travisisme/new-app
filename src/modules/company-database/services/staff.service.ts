import moment from "moment";
import React, { useEffect, useState } from "react";
import { Repository } from "typeorm";
import { BUser } from "../entities/b-user.entity";
import { Department } from "../entities/department.entity";
import { Education } from "../entities/education.entity";
import { IBUser } from "../types/definitions";

//const api = fetch('198.162.4.115/api/b-users');

export const getStaffEntries = async (setStaffEntries: React.Dispatch<React.SetStateAction<BUser[] & Education[] & Department[]>>) => {
    try {
        let response = await fetch(
            '192.168.4.115/api/b-users'
        );
        let staffEntries: BUser[] & Education[] & Department[] = await response.json();
        setStaffEntries(staffEntries)
    } catch (error) {
        setStaffEntries([]);
    }
};

export const updateStaffEntry = async ()