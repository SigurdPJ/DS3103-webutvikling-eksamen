import axios from "axios";
import IStaff from "../interfaces/IStaff";

const StaffService = (() => {

    const staffControllerEndpoint = "http://localhost:5177/api/staff/";

    const getAll = async (): Promise<IStaff[]> => {
        try {
            const result = await axios.get(staffControllerEndpoint);
            return result.data as IStaff[];
        } catch {
            return []; 
        }
    }

    const getById = async (id: number): Promise<IStaff | null> => {
        try {
            const result = await axios.get(staffControllerEndpoint + id);
            return result.data as IStaff;
        } catch {
            return null; 
        }
    }

    const getByName = async (name: string): Promise<IStaff[] | null> => {
        try {
            const result = await axios.get(`${staffControllerEndpoint}GetByName/${name}`);
            return result.data;
        } catch {
            return null; 
        }
    }

    const postStaff = async (newStaff: IStaff): Promise<IStaff | null> => {
        const result = await axios.post(staffControllerEndpoint, newStaff);
        return result.data;
    }

    const putStaff = async (updatedStaff: IStaff): Promise<IStaff | null> => {
        const result = await axios.put(staffControllerEndpoint, updatedStaff);
        return result.data;
    }

    const deleteStaff = async (id: number): Promise<IStaff | null> => {
        const result = await axios.delete(`${staffControllerEndpoint}${id}`);
        return result.data;
    }

    return {
        getAll,
        getById,
        getByName,
        postStaff,
        putStaff,
        deleteStaff
    }

})();

export default StaffService;
