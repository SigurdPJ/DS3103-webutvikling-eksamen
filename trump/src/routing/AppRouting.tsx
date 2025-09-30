import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ThoughtsPage, MerchPage, StaffPage} from '../pages';
import MainNavigation from "../components/shared/MainNavigation";

const AppRouting = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation/>
                <Routes>
                    <Route path="/" element={<ThoughtsPage/>}></Route>
                    <Route path="merch" element={<MerchPage/>}></Route>
                    <Route path="staff" element={<StaffPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouting;