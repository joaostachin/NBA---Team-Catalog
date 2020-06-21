import React from 'react';
import { FaUniversity, FaBasketballBall } from 'react-icons/fa';
import './styles.css';

export default function TeamCard({ team }) {
    return (
        <div className="container-team">
            <div className="team">
                <img src={team.image} alt={team.name} />
                <p className="title-teams">{team.city}</p>
                <p className="title-teams">{team.name}</p>
                <p><FaUniversity className="icon" /> {team.stadium}</p>
                <p><FaBasketballBall className="icon" /> {team.year}</p>
            </div>
        </div>
    );
}


