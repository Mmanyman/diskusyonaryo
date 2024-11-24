// WordBox.js
import React from "react";
import "./WordBox.css";

const WordBox = ({ word, definition, className }) => {
    return (
        <div className={`word-box ${className}`}>
            <h2>{word}</h2>
            <p>{definition}</p>
        </div>
    );
};

export default WordBox;
