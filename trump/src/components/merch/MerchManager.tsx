import { ReactNode, useState } from "react";
import ShowAllMerch from "./ShowAllMerch";
import UpdateMerch from "./UpdateMerch";
import AddMerch from "./AddMerch";
import MerchPageModule from "../../modules/MerchPageModule";

const MerchManager = () => {

    const defaultPageContent = () => {
        const pageFromLocalStorage = MerchPageModule.getPageFromLocalStorage();

        if(pageFromLocalStorage){
            MerchPageModule.savePageToLocalStorage(pageFromLocalStorage);
        }

        switch (pageFromLocalStorage) {
            case "show":
                return <ShowAllMerch/>;
            case "update":
                return <UpdateMerch/>;
            case "add":
                return <AddMerch/>;
            default:
                return <></>;
        }   
    }

    const [pageContent, setPageContent] = useState<ReactNode>(defaultPageContent);

    const handlePageChange = (pageString: string, pageContent: ReactNode) => {
        MerchPageModule.savePageToLocalStorage(pageString);
        setPageContent(pageContent);
    }

    const createAndGetMerchJSX = () => {
        return pageContent;
    }

    return (
        <>

            <div className="p-4 d-flex justify-content-center">
                <button className="btn btn-lg border m-1 bg-light text-nowrap" onClick={() => handlePageChange("show", <ShowAllMerch/>)}>Show All</button>
                <button className="btn btn-lg border m-1 bg-light text-nowrap" onClick={() => handlePageChange("update", <UpdateMerch/>)}>Update</button>
                <button className="btn btn-lg border m-1 bg-light text-nowrap" onClick={() => handlePageChange("add", <AddMerch/>)}>Add New</button>
            </div>
            
            <div className="pt-3 border-top border-gray">{createAndGetMerchJSX()}</div>
            
        </> 
    )
}

export default MerchManager;