import React, { useState } from "react";
import WordBox from "../../components/WordBox/WordBox";
import "./Profile.css";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [showAllContributions, setShowAllContributions] = useState(false);
    const [showAllLiked, setShowAllLiked] = useState(false);
    const [user, setUser] = useState({
        name: "Juan dela Cruz",
        address: "Manila, Philippines",
        language: "Filipino",
        profilePicture: "https://via.placeholder.com/150",
    });

    // Placeholder data
    const contributions = [
        { word: "CMSC 128", definition: "A subject" },
        { word: "Miagao", definition: "Malinong malipayon ining banwa natun. Pagbutlak sang adlaw, giakan sa baybayon." },
        { word: "Hiligaynon", definition: "A language." },
        { word: "Miagao", definition: "Akun pinalangga." },
        { word: "UP Visayas", definition: "A school in Miagao." }
    ];

    const recentlyLiked = [
        { word: "CMSC 128", definition: "A subject" },
        { word: "Miagao", definition: "Malinong malipayon ining banwa natun." },
        { word: "Hiligaynon", definition: "A language." },
        { word: "Miagao", definition: "Akun pinalangga." },
        { word: "UP Visayas", definition: "A school in Miagao." }
    ];

    const visibleContributions = showAllContributions ? contributions : contributions.slice(0, 4);
    const visibleLiked = showAllLiked ? recentlyLiked : recentlyLiked.slice(0, 4);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className="profile-container">
                <div className="profile-image">
                    <img src={user.profilePicture} alt="Profile" />
                </div>
                <div className="profile-info">
                    {isEditing ? (
                        <div className="edit-profile-form">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={user.address}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Language:
                                <input
                                    type="text"
                                    name="language"
                                    value={user.language}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <button onClick={handleSaveClick}>Save</button>
                        </div>
                    ) : (
                        <>
                            <h3>{user.name}</h3>
                            <p className="address">{user.address}</p>
                            <p className="language">{user.language}</p>
                            <button className="edit-button" onClick={handleEditClick}>
                                Edit Profile
                            </button><br/>
                            <button className="edit-button">
                                Log Out
                            </button>
                        </>
                    )}
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

export default Profile;