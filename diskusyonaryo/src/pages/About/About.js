import React from 'react';
import TeamMember from '../../components/TeamMember/TeamMember';
import './About.css';

const About = () => {
    const teamMembers = [
        {
            name: "Emmanual Ian Albeza",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            name: "Josaiah Borres",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            name: "Albin Alexis Cayanan",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            name: "Darah Via Moscoso",
            image: "https://via.placeholder.com/150",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
    ];

    return (
        <div>
            <div className='about-page'>
                <h1>About Diskusyonaryo.com</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi atque dolore explicabo nihil sequi,
                    ratione quaerat, dolor ut voluptatem cum at. Aliquam a optio nulla sint voluptas reiciendis aperiam.
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