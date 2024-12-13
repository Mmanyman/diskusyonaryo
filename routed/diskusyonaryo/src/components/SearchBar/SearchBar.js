import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Import styles for the search bar

const SearchBar = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState("")

    async function handleChange() {
        navigate("./search")
    }
    
    return (
        <div className="search-bar">
            <input
                className="form-control py-2 border"
                type="search"
                placeholder="ja kanakon"
                onChange={handleChange}
                value={input}
            />
        </div>
    );
};

export default SearchBar;