import React from 'react';
import './TeamMember.css'; 

const TeamMember = ({ name, image, description }) => {
    return (
        <div className='col-md-3 team-member'>
            <img src={image} alt={name} />
            <h6>{name}</h6>
            <p>{description}</p>
            <div className='social-btn'>
                <a href='#' className='btn btn-link'>
                    <i className="bi bi-facebook"></i>
                </a>
                <a href='#' className='btn btn-link'>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href='#' className='btn btn-link'>
                    <i className="bi bi-envelope"></i>
                </a>
            </div>
        </div>
    );
};

export default TeamMember;