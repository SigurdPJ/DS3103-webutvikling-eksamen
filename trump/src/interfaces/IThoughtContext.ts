import IThought from "./IThought";

interface IThoughtContext{
    thoughts: IThought[],
    getThoughtById: (id: number) => Promise<IThought | null>,
    getByCategory: (category: string) => Promise<IThought[] | null>,
    postThought: (newThought: IThought) => Promise<IThought | null>,
    putThought: (updatedThought : IThought) => void,
    deleteThought: (id: number) => void
}

export default IThoughtContext; 