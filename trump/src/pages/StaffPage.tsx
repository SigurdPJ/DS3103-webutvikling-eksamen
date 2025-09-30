import { StaffProvider } from "../contexts/StaffContext";
import StaffManager from "../components/staff/StaffManager";

const StaffPage = () => {

    return (
        <section className="m-3 mt-4 pt-5 pb-5 p-3">


                <header className="mt-5 mb-3 text-center">
                    {/*<img src="./public/images/staff-image.png" alt="" style={{height: "120px"}}/>*/}

                    <h1 className="fw-bold">Staff Manager</h1>
                    <h5>Fire at will!</h5>
                </header>
                
                <StaffProvider>
                    <StaffManager/>
                </StaffProvider>
        </section>
    )
}

export default StaffPage;
