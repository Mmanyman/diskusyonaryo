import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'; // Adjust the path if needed
import Homepage from './pages/Homepage/Homepage';
import Discussion from './pages/Discussion/Discussion';
import WordDiscussionExpanded from './components/WordDiscussion/WordDiscussionExpanded';

const App = () => {
    return (
        <Router>
            <Header /> {/* Include the Header component */}
            <Routes>
                {/* Route for the Discussion page */}
                <Route path="/" element={<Homepage />} />
                <Route path="/discussion" element={<Discussion />} />
                
                {/* Route for the expanded discussion page */}
                <Route path="/discussion/:id" element={<WordDiscussionExpanded />} />
            </Routes>
        </Router>
    );
};

export default App;