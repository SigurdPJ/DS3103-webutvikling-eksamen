import { useContext } from "react";
import { MerchContext } from "../../contexts/MerchContext";
import IMerchContext from "../../interfaces/IMerchContext";
import MerchItem from "./MerchItem";

const MerchList = () => {

    const {merch} = useContext(MerchContext) as IMerchContext;

    const createAndGetMerchJSX = () => {
        const merchJSX = merch.map( (merch, index) => {
            
            return (
                <MerchItem
                key={"merch" + index}
                id={merch.id}
                name={merch.name}
                type={merch.type} 
                price={merch.price} 
                inStock={merch.inStock} 
                image={merch.image}                    
                />        
            )
        });
        return merchJSX;
    }

    return (
        <section className="row w-100">
            {createAndGetMerchJSX()}
        </section>
    )
}

export default MerchList;