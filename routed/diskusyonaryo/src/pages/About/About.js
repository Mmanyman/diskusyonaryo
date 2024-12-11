import React from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import "./About.css";
import emman from "./emman.jpg";
import josaiah from "./josaiah.jpg";
import albin from "./albin.jpg";
import darah from "./darah.jpg";

const About = () => {
    const teamMembers = [
        {
            name: "Emmanual Ian Albeza",
            image: emman,
            description: "Life  is short!",
        },
        {
            name: "Josaiah Borres",
            image: josaiah,
            description: "Time is gold.",
        },
        {
            name: "Albin Alexis Cayanan",
            image: albin,
            description: "Food is life!",
        },
        {
            name: "Darah Via Moscoso",
            image: darah,
            description: "Love is in the air!",
        },
    ];

    return (
        <div>
            <div className='about-page'>
                <h1>About Diskusyonaryo.com</h1>
                <p>
                Diskusyonaryo.com is a web-based urban and regional dictionary where user can engage in discussion forums.
                </p>
            </div>

            <div className='about-team'>
                <h1> About Us </h1>
                <div className='row text-center'>
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            image={member.image}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;