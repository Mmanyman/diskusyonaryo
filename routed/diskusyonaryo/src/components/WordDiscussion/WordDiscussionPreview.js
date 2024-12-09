import React from 'react';
import './WordDiscussion.css';
import Comment from '../Comment/Comment';


const WordDiscussionPreview = ({ uploader, initialDiscussion }) => {
    if (!initialDiscussion) {
        return <div>Loading...</div>; // Handle loading state if necessary
    }

    return (
        <div className="discussion-preview">
            <h3>{uploader}</h3>
            <p>{initialDiscussion.content}</p>
            <div className="discussion-votes">
                <Comment comment={initialDiscussion} />
            </div>
        </div>
    );
};

export default WordDiscussionPreview;