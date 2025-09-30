import React from "react";
import IStaff from "../../interfaces/IStaff";
import StaffItem from "./StaffItem";

interface StaffSearchResultsProps {
    searchedStaff: IStaff[] | null;
    onDelete: () => void;
}

const StaffSearchResults: React.FC<StaffSearchResultsProps> = ({ searchedStaff, onDelete }) => {

    if (!searchedStaff || searchedStaff.length === 0) {
        return <p className="fw-semibold">No staff found.</p>;
    }

    return (
        <section className="row w-100">
            {searchedStaff.map((staffMember) => (
                <StaffItem
                    key={staffMember.id}
                    id={staffMember.id}
                    firstName={staffMember.firstName}
                    lastName={staffMember.lastName}
                    position={staffMember.position}
                    jobDescription={staffMember.jobDescription}
                    email={staffMember.email}
                    image={staffMember.image}
                    onDelete={onDelete}
                />
            ))}
        </section>
    )
}

export default StaffSearchResults;
