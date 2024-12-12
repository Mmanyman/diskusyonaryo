import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebase/config'
import { v4 as uuidv4 } from "uuid"
import { onAuthStateChanged } from 'firebase/auth';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore'
import './Addword.css';

const AddWord = () => {
  const [currentUser, setCurrentUser] = useState();
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('');
  const [definition, setDefinition] = useState('');

  const navigate = useNavigate(); // Hook to redirect after signup

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        window.alert('You need an account to post')
        navigate('../home')
      }
    })
  }, [currentUser])

  async function postToDB(post) {
    const docRef = doc(db, "posts", post.id);
    await setDoc(docRef, post);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      poster: currentUser.uid,
      word: word,
      language: language,
      definition: definition,
      likes: [],
      comments: []
    }
    await postToDB(newPost);
    window.alert(word + ' is added')

    await updateDoc(doc(db, "users", currentUser.uid), {
      posts: arrayUnion(newPost.id)
    })

    navigate('../home')
  };

  return (
    <div className="add-word-page">
      <h2>Add a New Word</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Word:</label>
          <input
            type="text"
            className="form-control"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Language:</label>
          <input
            type="text"
            className="form-control"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Definition:</label>
          <textarea
            className="form-control"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add Word
        </button>
      </form>
    </div>
  );
};

export default AddWord;
