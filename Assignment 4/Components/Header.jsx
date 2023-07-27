import React from "react";

const Header = ({setSearch}) => {
	const [searchValue, setSearchValue] = React.useState('');

	const handleSearch = () => {
		setSearch(searchValue);
		console.log(searchValue);
		setSearchValue('');
	}

    return (
        <div className="header">
            <img src={require('../assets/logo.jpeg')} alt="Logo" />
            <div className="search">
                <input 
					type="text" 
					placeholder="Search for Food" 
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyDown={(e) => {
						if(e.key === 'Enter') {
							console.log('Enter Pressed');
							handleSearch();
						}
					}}
				/>
				<div 
					className="search-container"
					onClick={handleSearch}
				>
					<img src={require('../assets/search.png')} alt="search-icon" />
				</div>
            </div>
			<div className="items">
				<li>Home</li>
				<li>About Us</li>
				<li>Cart (0)</li>
			</div>
            
        </div>
    );
};

export default Header;
