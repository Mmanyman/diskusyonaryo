import { collection, query, where, getDocs  } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../firebase/config'
import WordList from '../../components/WordList/WordList'

const Search = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])

  async function handleSubmit(event) {
    setInput(input.toLowerCase())
    const postRef = collection(db, "posts")
    const array = [];
    const q = query(postRef, where('word', '==', input))
    getDocs(q)
    .then((details) => {
      details.docs.forEach(doc => {
        array.push(doc.data())
      })
    }).catch(err => {
      console.log(err)
    })
    setResult(array)
    event.preventDefault()
  }

  async function displayResult() {
    return <WordList posts={result}/>
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
    </div>
  )
}

export default Search
