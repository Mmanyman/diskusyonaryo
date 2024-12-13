import { collection, getDocs  } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../firebase/config'
import WordBox from '../../components/WordBox/WordBox'
import "./Search.css";
const Search = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    const ref = collection(db, "posts");
    const result = await getDocs(ref);
    const updatedPosts = [];
    for (const doc of result.docs) {
      updatedPosts.push(doc.data())
    }
    setPosts(updatedPosts)
  }

  function checkInput(post) {
    return post.word === input
  }

  return (
    <div className="search-bar">
    <form onSubmit={handleSubmit}>
    <input
        className="form-control py-2 border"
        type="text"
        placeholder="ja kanakon"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type='submit'>Search</button>
    </form>
    <div/>
    
    <div classname="result">
      {posts.filter(post => checkInput(post)).map(post => 
        <WordBox key={post.id} word={post.word} language={post.language} definition={post.definition} className={"home"} />
      )}
    </div>
    </div>
  )
}

export default Search
