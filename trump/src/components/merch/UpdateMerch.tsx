import { useContext, ChangeEvent, useState, ReactNode } from 'react';
import { MerchContext } from '../../contexts/MerchContext';
import IMerchContext from '../../interfaces/IMerchContext';
import IMerch from '../../interfaces/IMerch';

const UpdateMerch = () => {

    const { getMerchById, putMerch } = useContext(MerchContext) as IMerchContext;

    const [selectedMerchId, setSelectedMerchId] = useState<number>(-1);
    const [feedback, setFeedback] = useState<ReactNode>(<></>);

    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [inStock, setInStock] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        setFeedback(<></>);

        switch (e.target.name) {
            case "id":
                setId(e.target.value);
                break;
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
        }
    }

    const getByIdFromContext = async () => { 

        if (id === "") {
            setFeedback(<p style={{color: "red"}}>Please enter a valid id.</p>);
            return;
        }

        const merch = await getMerchById( parseInt(id) );

        if (merch != null) {

            setSelectedMerchId(parseInt(id));
        
            if(merch.name != null){
                setName(merch?.name);
            }
            if(merch.type != null){
                setType(merch?.type);
            }
            setPrice(merch?.price.toString());
            setInStock(merch?.inStock.toString());
            setImage(merch?.image);

        } else {
            setFeedback(<p style={{color: "red"}}>No merch found with id: {id}.</p>);
        }
    }

    const updateMerch = async () => {

        const maxNumInput = 2147483647;

        if(selectedMerchId == -1){
            setFeedback(<p style={{color: "red"}}>Please select merch before updating.</p>);
            return;
        }

        if (name === "") {
            setFeedback(<p style={{color: "red"}}>Please enter merch name.</p>);
            return;
        }

        if (type === "") {
            setFeedback(<p style={{color: "red"}}>Please enter merch category.</p>);
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
        
        const updatedMerch: IMerch = {
            id: selectedMerchId,
            name: name,
            type: type,
            price: parseFloat(price),
            inStock: parseInt(inStock),
            image: image
        }

        putMerch(updatedMerch);
        setFeedback(<p style={{color: "green"}}>"{name}" updated in the database.</p>);

        setSelectedMerchId(-1);
        setId("");
        setName("");
        setType("");
        setPrice("");
        setInStock("");
        setImage("");
    }

    const createAndGetFeedbackJSX = () => {
        return feedback;
    }

    const createAndGetIdJSX = () => {
        if(selectedMerchId == -1){
            return <></>;
        } else {
            return <p>Selected: Merch with id {selectedMerchId}</p>;
        }
    }

    return (
        <section className="container d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 d-flex flex-column justify-content-center">
                
                <header className="p-2 mt-4 text-center">
                    <h3>Update Merch</h3>
                    <div className="fw-semibold">
                        {createAndGetIdJSX()}
                        {createAndGetFeedbackJSX()}
                    </div>
                </header>

                <div className="mt-3 mb-2">
                    <label className="ms-1 m-0 form-label">Select merch</label>
                    <div className="d-flex align-items-center">
                        <input 
                            className="form-control" 
                            name="id"                             
                            type="number" 
                            value={id} 
                            onChange={handleChange}
                            placeholder="Enter merch id"
                            />
                        <button className="btn btn-secondary ms-1 text-nowrap" onClick={getByIdFromContext}>Get Merch</button>
                    </div> 
                </div>

                <div className="mb-2">
                    <label className="ms-1 m-0 form-label">Name</label>
                    <input 
                        className="form-control" 
                        name="name" type="text" value={name} 
                        onChange={handleChange} 
                        maxLength={30}
                    />
                </div>
                <div className="mb-2">
                    <label className="ms-1 m-0 form-label">Category</label>
                    <input 
                        className="form-control" 
                        name="type" type="text" 
                        value={type} 
                        onChange={handleChange} 
                        maxLength={12}
                    />
                </div>
                <div className="mb-2">
                    <label className="ms-1 m-0 form-label">Price</label>
                    <input 
                        className="form-control" 
                        name="price" 
                        type="number" 
                        value={price} 
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label className="ms-1 m-0 form-label">Amount in stock</label>
                    <input 
                        className="form-control" 
                        name="inStock" 
                        type="number" 
                        value={inStock} 
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-3 d-flex justify-content-center">
                    <button className="btn btn-lg btn-success text-nowrap" onClick={updateMerch}>Update Merch</button>
                </div>

            </div>
        </section>
    )
}

export default UpdateMerch;
