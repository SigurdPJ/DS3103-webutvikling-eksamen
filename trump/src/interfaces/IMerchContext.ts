import IMerch from "./IMerch";

interface IMerchContext{
    merch: IMerch[],
    getMerchById: (id: number) => Promise<IMerch | null>,
    getByType: (type: string) => Promise<IMerch[] | null>,
    getByName: (name: string) => Promise<IMerch[] | null>,
    postMerch: (newMerch: IMerch) => Promise<IMerch | null>,
    putMerch: (updatedMerch : IMerch) => void,
    deleteMerch: (id: number) => void
}

export default IMerchContext; 