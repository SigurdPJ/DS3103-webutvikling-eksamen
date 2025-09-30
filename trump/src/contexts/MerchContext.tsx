import {useState, useEffect, createContext, FC} from 'react';
import IMerch from '../interfaces/IMerch';
import IMerchContext from '../interfaces/IMerchContext';
import IProps from '../interfaces/IProps';
import MerchService from '../services/MerchService';

export const MerchContext = createContext<IMerchContext | null>(null);

export const MerchProvider : FC<IProps> = ({children}) => {

    const [merch, setMerch] = useState<IMerch[]>([]);

    useEffect(()=>{
        getAndSetMerchFromService();
    }, [])

    const getAndSetMerchFromService = async () => {
        const merchFromService = await MerchService.getAll();
        setMerch(merchFromService);
    }

    const getMerchById = async (id: number) : Promise<IMerch | null> => {
        const merchFromService = await MerchService.getById(id);
        return merchFromService;
    }

    const getByType = async (type: string) : Promise<IMerch[] | null> => {
        const merchFromService = await MerchService.getByType(type);
        return merchFromService;
    }

    const getByName = async (name: string): Promise<IMerch[] | null> => {
        const merchFromService = await MerchService.getByName(name);
        return merchFromService;
    }     

    const postMerch = async (newMerch: IMerch) : Promise<IMerch | null> => {
        const result = await MerchService.postMerch(newMerch);
        if( result != null ){
            setMerch([result, ...merch]);
        }
        return result;
    }

    const putMerch = async (updatedMerch : IMerch) => {
        await MerchService.putMerch(updatedMerch);
        getAndSetMerchFromService();
    }

    const deleteMerch = async (id : number) => {
        await MerchService.deleteMerch(id);
        getAndSetMerchFromService();
    }

    return (
        <MerchContext.Provider value={{ merch, getMerchById, getByType, getByName, postMerch, putMerch, deleteMerch }}>
            {children}
        </MerchContext.Provider>
    )
}
