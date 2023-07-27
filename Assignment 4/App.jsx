import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { resturants as res } from "./Components/utils/config";


const App = () => {
    const [restraunts, setRestraunts] = React.useState(res);

    const handleSearch = (value) => {
        handleDataUpdate(value);
    }

    const handleDataUpdate = (value) => {
        console.log(value);

        setRestraunts(res);
        setRestraunts((res) => {
            const filteredlist = res.filter(rs => {
                const key = rs.info.name;
                return (
                    key.toLowerCase() === value.toLowerCase() || key.toLowerCase().includes(value.toLowerCase())
                );
            });
            console.log(filteredlist);

            return (
                value !== '' ?
                filteredlist : res
            );
        });
    }

    return (
        <div className="container">
            <Header setSearch={handleSearch} />
            <Body res={restraunts} />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);