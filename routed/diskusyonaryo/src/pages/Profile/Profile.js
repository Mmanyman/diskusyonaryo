import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/config"
import { onAuthStateChanged, signOut } from "firebase/auth";
import WordBox from "../../components/WordBox/WordBox";
import "./Profile.css";

const Profile = () => {
    const [showAllContributions, setShowAllContributions] = useState(false);
    const [showAllLiked, setShowAllLiked] = useState(false);
    const [currentUser, setUser] = useState();
    const [userDetails, setDetails] = useState();
    const profilePicture = "https://via.placeholder.com/150"

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
    });

    async function handleSignOut() {
        await signOut(auth)
        .then(() => {
            window.alert("sign out success")
            window.location.reload()
        })
    }    

    // Placeholder data
    const contributions = [];

    const recentlyLiked = [];

    const visibleContributions = showAllContributions ? contributions : contributions.slice(0, 4);
    const visibleLiked = showAllLiked ? recentlyLiked : recentlyLiked.slice(0, 4);

    if (!currentUser){
        return (
            <div>
                <Link to="/Signup">
                    Sign In
                </Link>
                <br/><br/><br/>
                <Link to="/Signup1">
                    Create an Account
                </Link>
            </div>
        )
    }
    else {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-image">
                    <img src={profilePicture} alt="Profile" />
                </div>
                <div className="profile-info">
                        <>
                            <h3>{currentUser.name}</h3>
                            <p className="address">{currentUser.address}</p>
                            <p className="language">{currentUser.language}</p>
                            <button className="edit-button" onClick={handleSignOut}>
                                Log Out
                            </button>
                        </>
                </div>
            </div>

            <h2>Contributions</h2>
            <div className="contributions">
                <div className="word-box-row">
                    {visibleContributions.map((item, index) => (
                        <WordBox
                            key={index}
                            word={item.word}
                            definition={item.definition}
                            className="word-box-profile"
                        />
                    ))}
                </div>
                {contributions.length > 4 && (
                    <div className="view-more-container">
                        <button
                            className="view-more-button"
                            onClick={() => setShowAllContributions(!showAllContributions)}
                        >
                            {showAllContributions ? "View Less" : "View More"}
                        </button>
                    </div>
                )}
            </div>

            <h2>Recently Liked</h2>
            <div className="recently-liked">
                <div className="word-box-row">
                    {visibleLiked.map((item, index) => (
                        <WordBox
                            key={index}
                            word={item.word}
                            definition={item.definition}
                            className="word-box-profile"
                        />
                    ))}
                </div>
                {recentlyLiked.length > 4 && (
                    <div className="view-more-container">
                        <button
                            className="view-more-button"
                            onClick={() => setShowAllLiked(!showAllLiked)}
                        >
                            {showAllLiked ? "View Less" : "View More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
};

export default Profile;