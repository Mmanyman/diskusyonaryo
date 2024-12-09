import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header'; // Adjust the path if needed
import Discussion from './pages/Discussion/Discussion';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import WordDiscussionExpanded from './components/WordDiscussion/WordDiscussionExpanded';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Homepage1/HomePage';
import SignupPage from './pages/Signup/Signuppage';
import Home from './pages/Home/Home';
import AddWord from './pages/Addword/Addword';
import Signup1 from './pages/Signup1/Signup1';
const App = () => {
    const location = useLocation();

    // Hide Header on specific routes
    const hideHeaderRoutes = ['/signup', '/login', '/', '/Signup1'];
    const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    return (
        <div>
            {!shouldHideHeader && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/discussion" element={<Discussion />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-word" element={<AddWord />} />
                <Route path="/Signup1" element={<Signup1 />} />
                <Route path="/discussion/:id" element={<WordDiscussionExpanded />} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
