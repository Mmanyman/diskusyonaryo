import React, { useState } from 'react';
import './Addword.css';

const AddWord = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding the word (e.g., API call or state update)
    console.log('Word:', word);
    console.log('Definition:', definition);
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
