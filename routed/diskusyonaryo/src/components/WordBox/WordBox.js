// WordBox.js
import React from "react";
import "./WordBox.css";
import { Link } from "react-router-dom"

const WordBox = (props) => {
    const { id, word, definition, language, className } = props;
    return (
        <>
        <div className={`word-box-${className}`}>
            <h2>{word}</h2>
            <h4>{language}</h4>
            <p>{definition}</p> {}
        </div>
        <div className="view-discussion">
        <Link to="/discussion">View Discussion</Link>
        </div>
        </>
        );
};

export default WordBox;
