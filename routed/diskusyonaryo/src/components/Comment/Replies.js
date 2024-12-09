import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import AddComment from '../Comment/AddComment';

const Replies = ({ discussion }) => {
    const [comments, setComments] = useState(discussion.comments || []); //use existing comments from the discussion

    const handleCommentSubmit = (text) => {
        const newComment = {
            id: comments.length + 1,
            text: text,
            replies: [],
        };
        setComments([...comments, newComment]);
    };

    return (
        <div className="container mt-5">
            <h4>Comments</h4>
            {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
            <AddComment onCommentSubmit={handleCommentSubmit} />
        </div>
    );
};

export default Replies;