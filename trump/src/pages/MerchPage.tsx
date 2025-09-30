import MerchManager from "../components/merch/MerchManager";
import { MerchProvider } from "../contexts/MerchContext";

const MerchPage = () => {
    return (
        <section className="mt-4 pt-5 pb-5 p-3">

            <header className="mt-5 text-center">
                {/*<img src="./public/images/merch-image.png" alt="" style={{height: "100px"}}/>*/}

                <h1 className="fw-bold">Merch Manager</h1>
                <h5>They say i have the best merch</h5>

            </header>
            
            <MerchProvider>
                <MerchManager/>
            </MerchProvider>
        </section>
    )
}

export default MerchPage;