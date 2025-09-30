interface IStaff{
    id?: number,
    firstName?: string,
    lastName?: string,
    position: string,
    jobDescription?: string,
    email: string,
    image: string,
    onDelete?: () => void
}

export default IStaff;