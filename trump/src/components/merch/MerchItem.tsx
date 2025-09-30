import { FC } from "react";
import IMerch from "../../interfaces/IMerch";
import ImageUploadService from "../../services/ImageUploadService";

const MerchItem : FC<IMerch> = ({id, name, type, price, inStock, image}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="p-2 pt-3 container">

                <article className="card border shadow-sm rounded text-center" style={{height: "550px"}}>
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <h4 className="fw-semibold text-nowrap">Product Id: {id}</h4>

                        <div className="w-100" style={{height: "240px"}}>
                            <img className="h-100 m-2 img-fluid object-fit-cover" 
                            src={ImageUploadService.getImageEndpoint() + image} 
                            alt={`Image of ${name}`} />
                        </div>

                        <h3 className="w-100 fw-semibold h3 mt-3">{name}</h3>
                      
                        <p className="text-nowrap m-1 p-0 fs-5"><span className="fw-semibold">Items left in stock: </span>{inStock}</p>
                        <p className="text-nowrap m-1 p-0 fs-5"><span className="fw-semibold">Category: </span>{type}</p>
                        <p className="text-nowrap m-1 p-0 fs-5"><span className="fw-semibold">Price: </span>{price}$</p>
                    </div>
                </article>

            </div>
        </div>
    )
}

export default MerchItem;