import IStaff from "./IStaff";

interface IStaffContext{
    staff: IStaff[],
    getStaffById: (id: number) => Promise<IStaff | null>
    getByName: (name: string) => Promise<IStaff[] | null>,
    postStaff: (newStaff: IStaff) => Promise<IStaff | null>,
    putStaff: (updatedStaff : IStaff) => void,
    deleteStaff: (id: number) => void,
}

export default IStaffContext;  