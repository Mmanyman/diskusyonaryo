// WordBox.js
import React from 'react';
import './WordBox.css'; 

const WordBox = ({ word, definition }) => {
    return (
        <div className="word-box">
            <h2>{word}</h2>
            <p>{definition}</p>
        </div>
    );
};

export default WordBox;