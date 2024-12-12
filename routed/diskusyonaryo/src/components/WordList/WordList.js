import React from 'react'
import WordBox from '../WordBox/WordBox'

const WordList = ( {posts} ) => {
  return (
    <div>
      {posts.map(post => 
        <WordBox key={post.id} word={post.word} definition={post.definition} language={post.language} className={"home"} />
      )}
    </div>
  )
}

export default WordList
