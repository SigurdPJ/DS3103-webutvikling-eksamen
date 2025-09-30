import axios from "axios";
import IMerch from "../interfaces/IMerch";

const MerchService = (() => {
    const merchControllerEndpoint = "http://localhost:5177/api/merch/";

    const getAll = async (): Promise<IMerch[]> => {
        try {
            const result = await axios.get(merchControllerEndpoint);
            return result.data as IMerch[];
        } catch {
            return [];
        }
    }

    const getById = async (id: number): Promise<IMerch | null> => {
        try {
            const result = await axios.get(merchControllerEndpoint + id);
            return result.data as IMerch;
        } catch {
            return null;
        }
    }

    const getByName = async (name: string): Promise<IMerch[] | null> => {
        try {
            const result = await axios.get(`${merchControllerEndpoint}GetByName/${name}`);
            return result.data;
        } catch {
            return null;
        }
    }

    const getByType = async (type: string): Promise<IMerch[] | null> => {
        try {
            const result = await axios.get(`${merchControllerEndpoint}GetByType/${type}`);
            return result.data;
        } catch {
            return null;
        }
    }

    const postMerch = async (newMerch: IMerch): Promise<IMerch | null> => {
        const result = await axios.post(merchControllerEndpoint, newMerch);
        return result.data;
    }

    const putMerch = async (updatedMerch: IMerch): Promise<IMerch | null> => {
        const result = await axios.put(merchControllerEndpoint, updatedMerch);
        return result.data;
    }

    const deleteMerch = async (id: number): Promise<IMerch | null> => {
        const result = await axios.delete(merchControllerEndpoint + id);
        return result.data;
    }

    return {
        getAll,
        getById,
        getByType,
        getByName,
        postMerch,
        putMerch,
        deleteMerch,
    }

})();

export default MerchService;