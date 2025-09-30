import axios from "axios";
import IThought from "../interfaces/IThought";

const ThoughtService = (()=>{

    const thoughtsControllerEndpoint = "http://localhost:5177/api/thought/";

    const getAll = async () : Promise<IThought[]> => {
        try {
            const result = await axios.get(thoughtsControllerEndpoint);
            return result.data as IThought[];
        } catch {
            return [];
        }
    }

    const getById = async (id : number) : Promise<IThought | null> => {
        try {
            const result = await axios.get(thoughtsControllerEndpoint + id);
            return result.data as IThought;
        } catch {
            return null;
        } 
    }

    const getByCategory = async (type : string): Promise<IThought[] | null> => {
        try {
            const result = await axios.get(`${thoughtsControllerEndpoint}GetByType/${type}`);
            return result.data;
        } catch {
            return null;
        } 
    }
 
    const postThought = async (newThought : IThought) : Promise<IThought | null> => {
        const result = await axios.post(thoughtsControllerEndpoint, newThought);
        return result.data;
    }

    const putThought = async (updatedThought : IThought) : Promise<IThought | null> => {
        const result = await axios.put(thoughtsControllerEndpoint, updatedThought);
        return result.data;
    }

    const deleteThought = async (id : number) : Promise<IThought | null> => {
        const result = await axios.put(thoughtsControllerEndpoint, id);
        return result.data;
    }
 
    return {
        getAll,
        getById,
        getByCategory,
        postThought,
        putThought,
        deleteThought
    }

})();

export default ThoughtService;