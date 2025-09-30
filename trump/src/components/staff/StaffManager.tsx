import { useState, useContext, ReactNode } from "react";
import { StaffContext } from "../../contexts/StaffContext";
import IStaffContext from "../../interfaces/IStaffContext";
import StaffSearchResults from "./StaffSearchResults";
import StaffList from "./StaffList";

// Importer for bruk av faMagnifyingGlass iconet
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const StaffManager = () => {

    const { getByName } = useContext(StaffContext) as IStaffContext;

    const [pageContent, setPageContent] = useState<ReactNode>(<></>);
    const [searchInput, setSearchInput] = useState<string>("");

    const showAllBtnClicked = () => {
        setPageContent(<StaffList/>);
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const searchBtnClicked = async () => {
        const searchResult = await getByName(searchInput);
        setPageContent(<StaffSearchResults searchedStaff={searchResult} onDelete={handleResultsOnDelete}/>);
    }

    const handleResultsOnDelete = async () => {
        const updatedSearchResult = await getByName(searchInput);
        setPageContent(<StaffSearchResults searchedStaff={updatedSearchResult} onDelete={handleResultsOnDelete}/>);
    }

    const createAndGetStaffJSX = () => {
        return pageContent;
    }

    return (
        <>

            <div className="d-flex justify-content-center">
                <button className="btn btn-primary m-1" onClick={showAllBtnClicked}>Show All</button>
            </div>

            <section className="d-flex flex-column align-items-center justify-content-center">

                <div className="mt-3 mb-4 d-flex col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                    <input
                        className="form-control rounded"
                        type="text"
                        value={searchInput}
                        onChange={handleSearchChange}
                        placeholder="Enter a name"
                    />

                <button className="btn btn-secondary ms-1 text-nowrap" onClick={searchBtnClicked}>Search <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                </div>

                {createAndGetStaffJSX()}
                
            </section>
        </>
    )
}

export default StaffManager;
