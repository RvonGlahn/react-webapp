import React from 'react';
import './Players.css';
import { Table } from 'reactstrap';

function Players(props) {
    const chunk = (arr, len) => {
        var chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, (i += len)));
        }
        return chunks;
    };

    const handle_table_input = (data, player, rowName) => {
        const chunkedArray = chunk(Object.keys(data), 3);
        let table_render_list = [];

        chunkedArray.forEach((element) => {
            table_render_list.push(
                <tr key={element[0]}>
                    {element.map((key, id) => (
                        <td key={id} style={{ textAlign: 'left' }}>
                            {key} : {player[rowName][key]}
                        </td>
                    ))}
                </tr>
            );
        });

        return table_render_list;
    };

    return (
        <div className="container">
            {props.players.map((player, id) => (
                <details key={id}>
                    <summary>
                        <div className="player">{player['info']['short_name']}</div>
                        <div className="player">{player['info']['overall']}</div>
                        <div className="player">{player['info']['player_positions']}</div>
                        <div className="player">{player['info']['club_name']}</div>
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

export default Players;
