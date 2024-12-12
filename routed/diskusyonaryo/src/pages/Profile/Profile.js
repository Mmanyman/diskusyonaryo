import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from "../../firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import WordBox from "../../components/WordBox/WordBox";
import "./Profile.css";

const Profile = () => {
    const [showAllContributions, setShowAllContributions] = useState(false);
    const [showAllLiked, setShowAllLiked] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [contributions, setContributions] = useState([]);
    const [userDetails, setDetails] = useState({
        name: "",
        location: "",
        languages: ""
    });
    const profilePicture = "https://via.placeholder.com/150"
    const navigate = useNavigate()

    async function getDetails() {
        const userRef = collection(db, "users")
        const q = query(userRef, where("id", "==", currentUser.uid))
        getDocs(q)
        .then((details) => {
            details.docs.forEach(doc => {
                setDetails(doc.data())
            })
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
                if (!currentUser?.uid) {
                    return
                }
                getDetails()
            }
        })
        getPosts()
    }, [currentUser])

    async function getPosts() {
        const ref = collection(db, "posts");
        const result = await getDocs(ref);
        const updatedPosts = [];
        for (const doc of result.docs) {
            updatedPosts.push(doc.data())
        }
        setContributions(updatedPosts)
    }

    async function handleSignOut() {
        await signOut(auth)
        .then(() => {
            window.alert("sign out success")
            navigate("/")
        })
    }    

    const recentlyLiked = [];

    function checkPost(post) {
        if (post.id in userDetails.posts) {
            return true
        } else {
            return false
        }
    }

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
                            <h3>{userDetails.name}</h3>
                            <p className="address">{userDetails.location}</p>
                            <p className="language">{userDetails.languages}</p>
                            <button className="edit-button" onClick={handleSignOut}>
                                Log Out
                            </button>
                        </>
                </div>
            </div>

            <h2>Contributions</h2>
            <div className="contributions">
                <div className="word-box-row">
                    {contributions.filter(post => checkPost(post)).map(post => 
                        <WordBox key={post.id} word={post.word} language={post.languages} definition={post.definition} className={"home"} />
                    )}
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