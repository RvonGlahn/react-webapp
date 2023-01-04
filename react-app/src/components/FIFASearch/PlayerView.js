import React from 'react';
import './PlayerView.css';
import { Table } from 'reactstrap';
import { PropTypes } from 'prop-types';

function PlayerView(props) {
    const chunk = (arr, len) => {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, (i += len)));
        }
        return chunks;
    };

    const backgroundColor = (value) => {
        let color = '#000000';
        if (value >= 80) {
            color = '#4caf50';
        } else if (value >= 70) {
            color = '#9bbf30';
        } else if (value >= 60) {
            color = '#ffc940';
        } else {
            color = '#e77e23';
        }
        return color;
    };

    const handle_table_input = (data, player, rowName) => {
        const chunkedArray = chunk(Object.keys(data), 3);
        let table_render_list = [];

        if (rowName === 'info') {
            chunkedArray.forEach((element) => {
                table_render_list.push(
                    <tr key={element[0]}>
                        {element.map((key, id) => (
                            <td key={id} style={{ textAlign: 'left' }}>
                                <span>{key}</span>
                                <span> : {player[rowName][key]}</span>
                            </td>
                        ))}
                    </tr>
                );
            });
        } else {
            chunkedArray.forEach((element) => {
                table_render_list.push(
                    <tr key={element[0]}>
                        {element.map((key, id) => (
                            <td key={id} style={{ textAlign: 'left' }}>
                                <span style={{ padding: '2px', color: 'white', background: backgroundColor(player[rowName][key]) }}>
                                    {player[rowName][key]}
                                </span>
                                <span> {key}</span>
                            </td>
                        ))}
                    </tr>
                );
            });
        }

        return table_render_list;
    };

    return (
        <div className="playercontainer">
            {props.players.map((player, id) => (
                <details key={id}>
                    <summary>
                        <div className="player">{player['info']['short name']}</div>
                        <div className="player">{player['skills']['overall']}</div>
                        <div className="player">{player['info']['player positions']}</div>
                        <div className="player">{player['info']['club name']}</div>
                    </summary>
                    <div className="details-content">
                        <Table borderless size="sm">
                            <tbody>
                                <tr key="head1" style={{ paddingTop: '40px' }}>
                                    <th scope="row" style={{ textAlign: 'left' }}>
                                        Info
                                    </th>
                                </tr>
                                {handle_table_input(props.players[id]['info'], player, 'info')}
                                <tr key="head2" style={{ paddingTop: '40px' }}>
                                    <th scope="row" style={{ textAlign: 'left' }}>
                                        Skills
                                    </th>
                                </tr>
                                {handle_table_input(props.players[id]['skills'], player, 'skills')}
                            </tbody>
                        </Table>
                    </div>
                </details>
            ))}
        </div>
    );
}

PlayerView.propTypes = {
    label_text: PropTypes.array,
};

export default PlayerView;
