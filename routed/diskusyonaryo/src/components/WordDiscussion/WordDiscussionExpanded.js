import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Replies from '../Comment/Replies';
import './WordDiscussion.css'; // Import your CSS styles

const WordDiscussionExpanded = () => {
    const { id } = useParams();
    const location = useLocation();

    const selectedDiscussion = location.state?.discussion;

    if (!selectedDiscussion) {
        return <div>Discussion not found.</div>;
    }

    return (
        <div className="discussion-expanded">
            <h1>{selectedDiscussion.uploader}'s Discussion</h1>
            <p>{selectedDiscussion.content}</p>
            <p className="votes">Votes: {selectedDiscussion.votes}</p>
            <div className="replies-container">
                <Replies discussion={selectedDiscussion} />
            </div>
        </div>
    );
};

export default WordDiscussionExpanded;