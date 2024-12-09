import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Trending');

  const categories = ['Trending', 'Latest', 'Popular'];

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Trending':
        return (
          <div>
            <h2 className="category-title">Trending</h2>
            <div className="content-item">
              <div className="word">Word 1</div>
              <div className="definition">Definition 1</div>
              <div className="view-discussion">
                <Link to="/discussion">View Discussion</Link>
              </div>
            </div>
            <div className="content-item">
              <div className="word">Word 2</div>
              <div className="definition">Definition 2</div>
              <div className="view-discussion">
                <Link to="/discussion">View Discussion</Link>
              </div>
            </div>
          </div>
        );
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

      {/* Add Word Button */}
      <div className="add-word-container">
        <Link to="/add-word">
          <button className="btn btn-primary">Add Word</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
