import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"
import { auth, db } from '../../firebase/config'
import WordBox from '../../components/WordBox/WordBox';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, arrayUnion, doc, setDoc, updateDoc, getDocs, query, where } from 'firebase/firestore'
import WordDiscussionPreview from '../../components/WordDiscussion/WordDiscussionPreview';
import './Discussion.css';

const Discussion = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState();
    const [comment, setComment] = useState('')
    const [discussions, setDiscussions] = useState([]);
    const [wordData, setWordData] = useState
    ({
        comments: ["", ""],
        poster: "123",
        word: "LOADING",
        definition: "Fetching definition..."
    });

    const location = useLocation();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            }
        })
        getWord("b2e49191-d827-4256-88a5-d4e548b0e34c")
    }, [])

    useEffect(() => {
        getComments()
    }, [wordData])

    async function getWord(wordID) {
        const ref = collection(db, "posts");
        const q = query(ref, where("id", "==", wordID))
        getDocs(q)
        .then((details) => {
            details.docs.forEach(doc => {
                setWordData(doc.data())
            })
        }).catch(err => {
            console.log(err)
        })
    }

    async function getComments() {
        const commentArray = [];
        const ref = collection(db, "comments")
        wordData.comments.forEach(cid => {
            const q = query(ref, where("id", "==", cid))
            getDocs(q)
            .then((details) => {
                details.docs.forEach(doc => {
                    commentArray.push(doc.data())
                })
                setDiscussions(commentArray)
            }).catch(err => {
                console.log(err)
            })
        })
    }

    const handleDiscussionClick = (discussion) => {
        navigate(`/discussion/${discussion.id}`, { state: { discussion } });
    };

    async function postToDB(post) {
        const docRef = doc(db, "comments", post.id);
        await setDoc(docRef, post);
    }

    async function handleSubmit() {
        if (!currentUser) {
            window.alert("You need to be logged in to comment")
            setComment("")
            return
        }

        const newComment = {
            id: uuidv4(),
            poster: currentUser.uid,
            parent: wordData.id,
            content: comment,
            replies: [],
            upvotes: [],
            downvotes: []
        }
        await postToDB(newComment)
        window.alert(currentUser.name + ' has added a comment')

        await updateDoc(doc(db, "users", currentUser.uid), {
            comments: arrayUnion(newComment.id)
        })

        await updateDoc(doc(db, "posts", wordData.id), {
            comments: arrayUnion(newComment.id)
        })

        setComment('')
    }

    return (
        <div className="discussion-page">
            <WordBox word={wordData.word} definition={wordData.definition} language={wordData.language} className={"word-box-discussion"} />
            
            <div className="textarea-container">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment"
                    rows={1}
                />
                <div className="button-container">
                    <button onClick={handleSubmit} className="submit-button">Submit</button>
                </div>
            </div>

            {discussions.map(discussion =>
                <div className="discussion-container" onClick={() => handleDiscussionClick(discussion)}>
                    <WordDiscussionPreview
                        uploader={discussion.poster} 
                        initialDiscussion={discussion} 
                    />
                </div>
            )}
        </div>
    );
};

export default Discussion;