import { useState, useEffect, createContext, FC } from "react";
import IStaff from "../interfaces/IStaff";
import IStaffContext from "../interfaces/IStaffContext";
import IProps from "../interfaces/IProps";
import StaffService from "../services/StaffService";

export const StaffContext = createContext<IStaffContext | null>(null);

export const StaffProvider: FC<IProps> = ({children}) => {
    const [staff, setStaff] = useState<IStaff[]>([]);

    useEffect(() => {
        getAndSetStaffFromService();
    }, [])

    const getAndSetStaffFromService = async () => {
        const staffFromService = await StaffService.getAll();
        setStaff(staffFromService);
    }

    const getStaffById = async (id: number): Promise<IStaff | null> => {
        const staffFromService = await StaffService.getById(id);
        return staffFromService;
    }

    const getByName = async (name: string): Promise<IStaff[] | null> => {
        const staffFromService = await StaffService.getByName(name);
        return staffFromService;
    }

    const postStaff = async (newStaff: IStaff) : Promise<IStaff | null> => {
        const result = await StaffService.postStaff(newStaff);
        if( result != null ){
            setStaff([result, ...staff]);
        }
        return result;
    }

    const putStaff = async (updatedStaff : IStaff) => {
        await StaffService.putStaff(updatedStaff);
        getAndSetStaffFromService();
    }
    
    const deleteStaff = async (id : number) => {
        await StaffService.deleteStaff(id);
        getAndSetStaffFromService();
    }

    return (
        <StaffContext.Provider value={{ staff, getStaffById, getByName, postStaff, putStaff, deleteStaff}}>
            {children}
        </StaffContext.Provider>
    )
}
