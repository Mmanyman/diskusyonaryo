import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar'; // Import the SearchBar component

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Diskusyonaryo.com</div>
            <SearchBar /> {}
            <nav className="nav-links">
                <a href="/">home</a>
                <a href="/Discussion">discussions</a>
                <a href="/About">about</a>
                <a href="/profile">👤</a>
            </nav>
        </header>
    );
};

export default Header;

