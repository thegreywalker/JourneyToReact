import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import useRestraunt from "./hooks/useRestraunt";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestrauntMenu from "./Components/RestrauntMenu";

const App = () => {
    const { filteredRes, handleDataUpdate } = useRestraunt();
    console.log(filteredRes);

    const handleSearch = (value) => {
        handleDataUpdate(value);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <Header setSearch={handleSearch} />
                        <Outlet />
                    </div>
                }
                errorElement={<Error />}
            >
                <Route index element={<Body res={filteredRes} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/restraunts/:resId" element={<RestrauntMenu />} />
            </Route>
        </Routes>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
