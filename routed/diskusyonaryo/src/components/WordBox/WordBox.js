// WordBox.js
import React from "react";
import "./WordBox.css";
import { useNavigate } from "react-router-dom"

const WordBox = (props) => {
    const { word, definition, language, className } = props;
    return (
        <>
        <div className={`word-box-${className}`}>
            <h2>{word}</h2>
            <h4>{language}</h4>
            <p>{definition}</p>
        </div>
        </>
        );
};

export default WordBox;
