import React from 'react'
import WordBox from '../WordBox/WordBox'

const WordList = ( {posts} ) => {
  return (
    <div>
      {posts && posts.map(post => {
        <WordBox key={post.id} word={post.word} definition={post.definition} className={"home"} />
      })}
    </div>
  )
}

export default WordList
