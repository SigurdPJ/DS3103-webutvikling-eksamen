import { useContext } from "react";
import { StaffContext } from "../../contexts/StaffContext";
import IStaffContext from "../../interfaces/IStaffContext";
import StaffItem from "./StaffItem";

const StaffList = () => {

    const {staff} = useContext(StaffContext) as IStaffContext; 

    const createAndGetStaffJSX = () => {

        const staffJSX = staff.map( (staff, index) => {
            return (
                <StaffItem
                    key={"staff" + index}
                    id={staff.id} 
                    firstName={staff.firstName}
                    lastName={staff.lastName}
                    position={staff.position}
                    jobDescription={staff.jobDescription}
                    email={staff.email}
                    image={staff.image}
                    onDelete={() => {}}                 
                />                
            )
        });
        return staffJSX; 
    }

    return (
        <section className="row w-100">
            {createAndGetStaffJSX()}
        </section>
    )
}

export default StaffList;