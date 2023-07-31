import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import useRestraunt from "./hooks/useRestraunt";


const App = () => {
    const {filteredRes, handleDataUpdate} = useRestraunt();
    console.log(filteredRes);

    const handleSearch = (value) => {
        handleDataUpdate(value);
    }


    return (
        <div className="container">
            <Header setSearch={handleSearch} />
            <Body res={filteredRes} />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);