import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setSearch }) => {
    const [searchValue, setSearchValue] = React.useState("");
    const cartItems = useSelector(store => store.cart.items);
    const navigate = useNavigate();

    const handleSearch = () => {
        setSearch(searchValue);
        setSearchValue("");
        navigate('/');
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
                <Link to="/cart" style={{fontWeight: "bold"}}>Cart ({cartItems.length})</Link>
            </div>
        </div>
    );
};

export default Header;
