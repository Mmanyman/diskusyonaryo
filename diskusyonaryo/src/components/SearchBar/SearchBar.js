import React from 'react';
import './SearchBar.css'; // Import styles for the search bar

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input
                className="form-control py-2 border"
                type="search"
                placeholder="ja kanakon"
            />
        </div>
    );
};

export default SearchBar;