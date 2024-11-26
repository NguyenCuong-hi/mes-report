import { Route, Routes } from "react-router-dom";
import DashBoad from "./dashboad/dashboad";

const AppRouter = () => {

    return (

        <Routes>

            <Route path="/home" element={<DashBoad />}></Route>
        </Routes>
    )

}

export default AppRouter;