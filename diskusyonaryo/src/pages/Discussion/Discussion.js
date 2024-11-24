import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordBox from '../../components/WordBox/WordBox';
import WordDiscussionPreview from '../../components/WordDiscussion/WordDiscussionPreview';
import Comment from '../../components/Comment/Comment';
import './Discussion.css';

const Discussion = () => {
    const navigate = useNavigate();
    
    //sample word
    const wordData = {
        word: "Hasdfeed",
        definition: "A word commonly used in Hiligaynon dialect...",
    };

    //discussion sample data
    const discussionData = [
        {
            id: 1,
            uploader: "User123",
            content: "This is a great discussion on the usage of 'Ja Kanakon'.",
            votes: 10,
            comments: [],
        },
        {
            id: 2,
            uploader: "chawie",
            content: "sine sine.",
            votes: 13,
            comments: [],
        },
    ];

    const [discussions, setDiscussions] = useState(discussionData);

    const handleDiscussionClick = (discussion) => {
        navigate(`/discussion/${discussion.id}`, { state: { discussion } });
    };

    return (
        <div className="discussion-page">
            <WordBox word={wordData.word} definition={wordData.definition} className="word-box-discussion" />
            {discussions.map((discussion) => (
                <div className="discussion-container" onClick={() => handleDiscussionClick(discussion)}>
  
                    <WordDiscussionPreview 
                        uploader={discussion.uploader} 
                        initialDiscussion={discussion} 
                    />
                    
                </div>
            ))}
        </div>
    );
};

export default Discussion;