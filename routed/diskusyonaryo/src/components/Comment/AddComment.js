// src/components/AddComment/AddComment.js
import React, { useState, useEffect, useRef } from 'react';
import './Comment.css'; 

const AddComment = ({ onCommentSubmit }) => {
    const [newComment, setNewComment] = useState('');
    const textareaRef = useRef(null); 

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim()) {
            onCommentSubmit(newComment);
            setNewComment(''); //clear the input field after submission
        }
    };

    const handleCancel = () => {
        setNewComment(''); //clear the input field when canceling
    };

    //adjust height of the textarea based on the content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; 
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
        }
    }, [newComment]);

    return (
        <form onSubmit={handleCommentSubmit} className="add-comment-form">
            <div className="textarea-container">
                <textarea
                    ref={textareaRef}
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Add a reply"
                    rows={1}
                />
                <div className="button-container">
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default AddComment;