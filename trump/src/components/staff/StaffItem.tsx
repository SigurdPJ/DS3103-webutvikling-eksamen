import { FC, useContext } from "react";
import IStaff from "../../interfaces/IStaff";
import { StaffContext } from "../../contexts/StaffContext";
import IStaffContext from "../../interfaces/IStaffContext";
import ImageUploadService from "../../services/ImageUploadService";

const StaffItem: FC<IStaff> = ({ id, image, firstName, lastName, position,  email, onDelete }) => {
    
    const {deleteStaff} = useContext(StaffContext) as IStaffContext;

    const deleteBtnClicked = async () => {
        if (id && onDelete) {
            await deleteStaff(id);
            onDelete();
        }
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="p-2 pt-3 container">

                <article className="card border shadow-sm rounded" style={{height: "450px"}}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <img className="mt-2 m-2 rounded img-fluid" src={ImageUploadService.getImageEndpoint() + image} alt={`Image of ${firstName} ${lastName}`}/>
                        <p className="fw-semibold mt-2 h3">{firstName} {lastName}</p>
                        <p className="fw-semibold h5">{position}</p>
                        <p className="fw-semibold">{email}</p>
                        <button className="mb-2 btn btn-lg btn-danger text-nowrap" onClick={deleteBtnClicked}>You're Fired!</button>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default StaffItem;
