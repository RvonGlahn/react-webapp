import React from 'react';
import './Players.css';

const filterKeys = [12, 14, 16, 18, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 49];

function Players(props) {
    return (
        <div className="container">
            {props.values[0]['data'].map((player, id) => (
                <details key={id}>
                    <summary>
                        <div className="player">{player[1]}</div>
                        <div className="player">{player[3]}</div>
                        <div className="player">{player[7]}</div>
                        <div className="player">{player[5]}</div>
                    </summary>
                    <div className="details-content">
                        <br />
                        <div>
                            <p className="money">Age: {player[2]}</p>
                            <p className="money">Wage: {player[21]}</p>
                            <p className="money">Value: {player[20]}</p>
                            <br />
                            <br />
                        </div>
                        {props.values[0]['data'][id].map((value, key) => (
                            <p key={key} className="attribute">
                                {filterKeys.includes(key) && [props.values[0]['columns'][key], ' : ', player[key]]}
                            </p>
                        ))}
                        <div></div>
                    </div>
                </details>
            ))}
        </div>
    );
}

export default Players;
