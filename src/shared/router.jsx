import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage />}
                ></Route>
                <Route
                    path=":id"
                    element={<DetailPage />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
