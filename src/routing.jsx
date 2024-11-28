import { Route, Routes } from "react-router-dom";
import DashBoad from "./dashboad/dashboad";
import Product from "./page/product";
import MasterLayout from "./layouts/master.jsx";
const AppRouter = () => {

    return (

        <Routes>
            <Route element={<MasterLayout />} >
                <Route path="/home" element={<DashBoad />}></Route>
                <Route path="/product" element={<Product />}></Route>
            </Route>


        </Routes>
    )

}

export default AppRouter;