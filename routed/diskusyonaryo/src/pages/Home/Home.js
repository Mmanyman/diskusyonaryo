import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebase/config'
import WordList from '../../components/WordList/WordList';

const Home = () => {
  const [currentUser, setCurrentUser] = useState();
  const [selectedCategory, setSelectedCategory] = useState('Trending');
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const ref = collection(db, "posts");
    const result = await getDocs(ref);
    const updatedPosts = [];
    for (const doc of result.docs) {
      updatedPosts.push(doc.data())
    }
    // result.docs.forEach((doc) => {
    //   updatedPosts.push(doc.data())
    // })
    // console.log(updatedPosts)
    setPosts(updatedPosts)
  }

  useEffect(() => {
    getPosts()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      }
  })
  }, []);

  const categories = ['Trending', 'Latest', 'Popular'];

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Trending':
        return (
          <>
          <h2 className="category-title">Trending</h2>
          <div>
            <WordList posts={posts}/>
          </div>
          </>
        )
      
      case 'Latest':
        return (
          <div>
            <h2 className="category-title">Latest</h2>
            <div className="content-item">
              <div className="word">New Word 1</div>
              <div className="definition">New Definition 1</div>
              <div className="view-discussion">
                <Link to="/discussion">View Discussion</Link>
              </div>
            </div>
            <div className="content-item">
              <div className="word">New Word 2</div>
              <div className="definition">New Definition 2</div>
              <div className="view-discussion">
                <Link to="/discussion">View Discussion</Link>
              </div>
            </div>
          </div>
        );
      case 'Popular':
        return (
          <div>
            <h2 className="category-title">Popular</h2>
            <div className="content-item">
              <div className="word">Popular Word 1</div>
              <div className="definition">Popular Definition 1</div>
              <div className="view-discussion">
                <Link to="/discussion">View Discussion</Link>
              </div>
            </div>
            <div className="content-item">
              <div className="word">Popular Word 2</div>
              <div className="definition">Popular Definition 2</div>
              <div className="view-discussion">
                <Link to="/discussion">View Discussion</Link>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Add Word Button */}
      <div className="add-word-container">
        <Link to="/add-word">
          <button className="btn btn-primary">Add Word</button>
        </Link>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        {categories.map((category) => (
        <button
            key={category}
            className={`slider-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <main className="main-content">{renderContent()}</main>

    </div>
  );
}

export default Home;
