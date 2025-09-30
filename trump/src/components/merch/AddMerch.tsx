import { useState, ChangeEvent, useContext, useRef, ReactNode } from 'react';
import IMerchContext from '../../interfaces/IMerchContext';
import { MerchContext } from '../../contexts/MerchContext';
import IMerch from '../../interfaces/IMerch';
import ImageUploadService from "../../services/ImageUploadService";

const AddMerch = () => {

    const { postMerch } = useContext(MerchContext) as IMerchContext;

    const [feedback, setFeedback] = useState<ReactNode>(<></>);

    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [inStock, setInStock] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);


    const imageInputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFeedback(<></>);

        switch (e.target.name) {
            case "name":
                    setName(e.target.value);
                break;
            case "type":
                setType(e.target.value);
                break;
            case "price":
                setPrice(e.target.value);
                break;
            case "inStock":
                setInStock(e.target.value);
                break;
        }
    }

    const setImageHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setFeedback(<></>);

        const { files } = event.target;
        if (files != null) {
            const file = files[0];
            setImage(file);
        }
    }

    const registerMerch = () => {

        const maxNumInput = 2147483647;

        if (name === "") {
            setFeedback(<p style={{color: "red"}}>Please enter merch name.</p>);
            return;
        }

        if (type === "") {
            setFeedback(<p style={{color: "red"}}>Please enter merch type.</p>);
            return;
        }

        if (price === "") {
            setFeedback(<p style={{color: "red"}}>Please enter merch price.</p>);
            return;
        }

        if (parseInt(price) > maxNumInput) {
            setFeedback(<p style={{color: "red"}}>Price exceeds the maximum limit.</p>);
            return;
        }

        if (inStock === "") {
            setFeedback(<p style={{color: "red"}}>Please enter merch amount in stock.</p>);
            return;
        }

        if (parseInt(inStock) > maxNumInput) {
            setFeedback(<p style={{color: "red"}}>Stock exceeds the maximum limit.</p>);
            return;
        }

        if (image === null) {
            setFeedback(<p style={{color: "red"}}>Please upload an image.</p>);
            return;
        }
    
        const newMerch: IMerch = {
            name: name,
            type: type,
            price: parseFloat(price),
            inStock: parseInt(inStock),
            image: image.name
        }
    
        ImageUploadService.uploadImage(image);
        postMerch(newMerch);

        setFeedback(<p style={{color: "green"}}>"{name}" added to database.</p>);

        setName("");
        setType("");
        setPrice("");
        setInStock("");
        setImage(null);

        if (imageInputRef.current) {
            imageInputRef.current.value = "";
        }
    }

    const createAndGetFeedbackJSX = () => {
        return feedback;
    }

    return (
        <section className="container d-flex flex-column justify-content-center">

            <header className="p-2 mt-4 text-center">
                <h3>Add new merch </h3>
                <div className="fw-semibold">{createAndGetFeedbackJSX()}</div>
            </header>

            <section className="d-flex justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">

                    <div className="mb-2">
                        <label className="ms-1 m-0 form-label">Name</label>
                        <input className="form-control" name="name" type="text" value={name} onChange={handleChange} maxLength={30}/>
                    </div>
                    <div className="mb-2">
                        <label className="ms-1 m-0 form-label">Category</label>
                        <input className="form-control" name="type" type="text" value={type} onChange={handleChange} maxLength={12}/>
                    </div>
                    <div className="mb-2">
                        <label className="ms-1 m-0 form-label">Price</label>
                        <input className="form-control" name="price" type="number" value={price} onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label className="ms-1 m-0 form-label">Amount in stock</label>
                        <input className="form-control" name="inStock" type="number" value={inStock} onChange={handleChange}/>
                    </div>
                    <div className="mb-2">
                        <label className="ms-1 form-label">Upload Image</label>
                        <input className="form-control" onChange={setImageHandler} type="file" ref={imageInputRef}/>
                    </div>
                    
                    <div className="mt-4 d-flex justify-content-center">
                        <button className="btn btn-lg btn-success" onClick={registerMerch}>Add Merch</button>
                    </div>

                </div>
            </section>

        </section>
    )
}

export default AddMerch;
