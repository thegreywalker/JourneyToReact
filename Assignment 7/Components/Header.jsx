import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setSearch }) => {
    const [searchValue, setSearchValue] = React.useState("");

    const handleSearch = () => {
        setSearch(searchValue);
        setSearchValue("");
    };

    return (
        <div className="header">
            <Link to="/">
                <img src={require("../assets/logo.jpeg")} alt="Logo" />
            </Link>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for Food"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            console.log("Enter Pressed");
                            handleSearch();
                        }
                    }}
                />
                <div className="search-container" onClick={handleSearch}>
                    <img
                        src={require("../assets/search.png")}
                        alt="search-icon"
                    />
                </div>
            </div>
            <div className="items">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <li>Cart (0)</li>
            </div>
        </div>
    );
};

export default Header;
