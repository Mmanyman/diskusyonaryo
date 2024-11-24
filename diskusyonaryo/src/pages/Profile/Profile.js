import React from "react";
import WordBox from "../../components/WordBox/WordBox";
import "./Profile.css";

const Profile = () =>  {
    const user = {
        name: "Juan dela Cruz",
        address: "Manila, Philippines",
        language: "Filipino",
        profilePicture: "https://via.placeholder.com/150",
    };

    // placeholder
    const contributions = [
        { word: "CMSC 128", definition: "A subject" },
        { word: "Miagao", definition: "Malinong malipayon ining banwa natun. Pagbutlak sang adlaw gikan sa baybayun."},
        { word: "Miagao", definition: "Akun pinalangga"},
        { word: "Miagao", definition: "Akun pinalangga"}, 
        { word: "Miagao", definition: "Akun pinalangga"},
        { word: "Miagao", definition: "Akun pinalangga"}
    ];

    const recentlyLiked = [
        { word: "UP Visayas", definition: "school" },
        { word: "Bananan", definition: "Akun pinalangga" }
    ];

    return (
        <div>
            <div className='profile-container'>
                <div className='profile-image'>
                    <img src={user.profilePicture} alt='Profile' />
                </div>
                <div className='profile-info'>
                    <h3>{user.name}</h3>
                    <p className='address'>{user.address}</p>
                    <p className='language'>{user.language}</p>
                    <a href='#' className='edit-button'>
                        <p> Edit Profile</p>
                    </a>
                </div>
            </div>

            <h2> Contributions </h2>
            <div className='contributions'>
                {contributions.map((item, index) => (
                    <WordBox 
                        key={index} 
                        word={item.word} 
                        definition={item.definition}
                        className="word-box-profile" />
                ))}
            </div>

            <h2> Recently Liked </h2>
            <div className='recently-liked'>
                {recentlyLiked.map((item, index) => (
                    <WordBox 
                        key={index} 
                        word={item.word} 
                        definition={item.definition}
                        className="word-box-profile" />
                ))}
            </div>
        </div>
    );
};

export default Profile;