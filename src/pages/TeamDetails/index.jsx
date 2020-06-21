import React from 'react';
import './styles.css';

export default function TeamDetails() {
    return (
        <div className="container">
            <div className="title-team">
                <div className="main">
                    <h3 className="name-team">Boston Celtics</h3>
                </div>
                <div className="players-info">
                    <ul className="line-players">
                        <li>Jaylen Brown
                            <p className="parag"><b>SF</b></p>
                        </li>
                        <li>Marcus Smart
                            <p className="parag"><b>SG</b></p>
                        </li>
                        <li>Jonathan Holme
                            <p className="parag"><b>PF</b></p>
                        </li>
                        <li>Kemba Walker
                            <p className="parag"><b>PG</b></p>
                        </li>
                        <li>Enes Kante
                            <p className="parag"><b>C</b></p>
                        </li>
                        <li>Gordon Hayward
                            <p className="parag"><b>PF</b></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
