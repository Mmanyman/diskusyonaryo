// src/components/Comment/Comment.js
import React, { useState } from 'react';
import './Comment.css';
import AddComment from '../Comment/AddComment';

const Comment = ({ comment, level = 0 }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replies, setReplies] = useState([]);
    const [votes, setVotes] = useState(0); // Track votes for each comment

    const toggleReplyForm = () => {
        setShowReplyForm(!showReplyForm);
    };

    const handleReplySubmit = (replyText) => {
        const newReply = {
            id: replies.length + 1,
            text: replyText,
            replies: [],
        };
        setReplies([...replies, newReply]);
        setShowReplyForm(false); //hide the reply form after submission
    };

    const handleUpvote = () => {
        setVotes(votes + 1);
    };

    const handleDownvote = () => {
        setVotes(votes - 1);
    };

    return (
        <div className="comment-box" style={{ paddingLeft: level * 20 + 'px' }}>
            <div className="comment-content">
                <p>{comment.text}</p>
                    <button onClick={(e) => { e.stopPropagation(); handleUpvote(); }}><i className="bi bi-hand-thumbs-up"></i></button>
                    <span>{votes}</span>
                    <button onClick={(e) => { e.stopPropagation(); handleDownvote(); }}><i className="bi bi-hand-thumbs-down"></i></button>
                <button onClick={toggleReplyForm} className="btn btn-link">
                    <i className="bi bi-reply"></i>
                </button>
            </div>

            {showReplyForm && (
                <div className="reply-form">
                    <AddComment onCommentSubmit={handleReplySubmit} />
                </div>
            )}

            <div className="replies">
                {replies.map((reply, index) => (
                    <Comment key={index} comment={reply} level={level + 1} />
                ))}
            </div>
        </div>
    );
};

export default Comment;