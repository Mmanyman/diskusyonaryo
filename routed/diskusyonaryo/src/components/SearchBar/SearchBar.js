import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Import styles for the search bar

const SearchBar = () => {
    const [input, setInput] = useState("")
    
    return (
        <div className="search-bar">
            <input
                className="form-control py-2 border"
                type="search"
                placeholder="ja kanakon"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
        </div>
    );
};

export default SearchBar;