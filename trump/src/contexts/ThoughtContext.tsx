import { useState, useEffect, createContext, FC } from "react";
import IThought from "../interfaces/IThought";
import IThoughtContext from "../interfaces/IThoughtContext";
import IProps from "../interfaces/IProps";
import ThoughtService from "../services/ThoughtService";

export const ThoughtContext = createContext<IThoughtContext | null>(null);

export const ThoughtProvider: FC<IProps> = ({children}) => {
    const [thoughts, setThought] = useState<IThought[]>([]);

    useEffect(() => {
        getAndSetThoughtsFromService();
    }, [])

    const getAndSetThoughtsFromService = async () => {
        const thoughtFromService = await ThoughtService.getAll();
        setThought(thoughtFromService);
    }

    const getThoughtById = async (id: number): Promise<IThought | null> => {
        const thoghtFromService = await ThoughtService.getById(id);
        return thoghtFromService;
    }

    const getByCategory = async (category: string): Promise<IThought[] | null> => {
        const thoghtFromService = await ThoughtService.getByCategory(category);
        return thoghtFromService;
    }

    const postThought = async (newThought: IThought) : Promise<IThought | null> => {
        const result = await ThoughtService.postThought(newThought);
        if( result != null ){
            setThought([result, ...thoughts]);
        }
        return result;
    }

    const putThought = async (updatedThought : IThought) => {
        await ThoughtService.putThought(updatedThought);
        getAndSetThoughtsFromService();
    }
    
    const deleteThought = async (id : number) => {
        await ThoughtService.deleteThought(id);
        getAndSetThoughtsFromService();
    }

    return (
        <ThoughtContext.Provider value={{ thoughts, getThoughtById, getByCategory, postThought, putThought, deleteThought }}>
            {children}
        </ThoughtContext.Provider>
    )
}
