import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth.tsx";
import Home from "./Home.tsx";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Auth />} />
                <Route path="/home" element = {<Home/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;