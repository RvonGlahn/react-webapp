import React from 'react';
import './Input.css';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Players from './Players';
import { loadPlayer, loadSuggest, loadLists, loadFIFAVersion } from '../../services/fifa';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            age: '',
            player_value: '',
            fifa_version: '',
            ability1Name: '',
            ability1Value: '',
            ability2Name: '',
            ability2Value: '',
            fifa_versions: [21, 20, 19, 18, 17, 16, 15],
            suggestion: [],
            posList: [],
            attrList: [],
            players: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.handleChangeFIFA = this.handleChangeFIFA.bind(this);
    }

    componentDidMount() {
        this.handleLoad();
    }

    async handleLoad() {
        let json_data = await loadLists();
        const attributes = JSON.parse(json_data);

        this.setState({
            ...this.state,
            posList: [''].concat(attributes['positions']),
            attrList: [''].concat(attributes['skills']),
        });
    }

    async handleChange(event) {
        var reg = /[^a-zA-Z0-9]/;
        this.setState({ [event.target.name]: event.target.value });

        // only if
        if (this.state.name.length >= 4 && event.target.name === 'name') {
            let sanitized_name = this.state.name.replace(reg, '');

            let suggest_json = await loadSuggest(sanitized_name);
            // convert this res in python to json
            const suggest = JSON.parse(suggest_json);
            this.setState({ ...this.state, suggestion: suggest });
        }
    }

    async handleChangeFIFA(event) {
        this.setState({
            ...this.state,
            suggestion: [],
            [event.target.name]: event.target.value,
        });

        loadFIFAVersion(event.target.value);
    }

    async handleClick() {
        let reqJSON = Object.assign({}, this.state);

        reqJSON.position = reqJSON.position.trim();
        reqJSON.ability1Name = reqJSON.ability1Name.trim();
        reqJSON.ability2Name = reqJSON.ability2Name.trim();

        const players = await loadPlayer(reqJSON);
        //const players = JSON.parse(players_json);

        this.setState({ ...this.state, players: players, suggestion: [] });
    }

    render() {
        return (
            <Container style={{ paddingTop: '75px', paddingBottom: '100px' }}>
                <h1 className="heading">Suche Spieler in FIFA 21</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <input
                                type="text"
                                className="form-input"
                                list="suggest"
                                name="name"
                                wert="Name"
                                onChange={this.handleChange}
                                autoComplete="new-password"
                            />
                            <datalist id="suggest">
                                {this.state.suggestion ? (
                                    this.state.suggestion.map((playerName, i) => <option value={playerName} key={i}></option>)
                                ) : (
                                    <option></option>
                                )}
                            </datalist>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPosition">
                            <Form.Label>Position</Form.Label>
                            <Form.Control as="select" name="position" value={this.state.position} onChange={this.handleChange}>
                                {this.state['posList'].map((position, i) => (
                                    <option value={position} key={i}>
                                        {position}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAttribute1">
                            <Form.Label>Skill 1</Form.Label>
                            <Form.Control as="select" name="ability1Name" value={this.state.ability1Name} onChange={this.handleChange}>
                                {this.state['attrList'].map((position, i) => (
                                    <option value={position} key={i}>
                                        {position}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAtt1Value">
                            <Form.Label>Wert Skill 1</Form.Label>
                            <Form.Control name="ability1Value" value={this.state.ability1Value} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAttribute2">
                            <Form.Label>Skill 2</Form.Label>
                            <Form.Control as="select" name="ability2Name" value={this.state.ability2Name} onChange={this.handleChange}>
                                {this.state['attrList'].map((position, i) => (
                                    <option value={position} key={i}>
                                        {position}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAtt2Value">
                            <Form.Label>Wert Skill 2</Form.Label>
                            <Form.Control type="text" name="ability2Value" value={this.state.ability2Value} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAge">
                            <Form.Label>Maximales Alter</Form.Label>
                            <Form.Control type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridWert">
                            <Form.Label>Maximaler Spieler Wert</Form.Label>
                            <Form.Control type="text" name="player_value" value={this.state.player_value} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridVersion">
                            <Form.Label>FIFA Version</Form.Label>
                            <Form.Control as="select" name="fifa_version" value={this.state.fifa_version} onChange={this.handleChangeFIFA}>
                                {this.state['fifa_versions'].map((position, i) => (
                                    <option value={position} key={i}>
                                        FIFA {position}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Col></Col>
                        <Col>
                            <ButtonSubmit buttonStyle="btn--primary--form" buttonSize="btn--wide" buttonColor="blue" onClick={this.handleClick} />
                        </Col>
                        <Col></Col>
                    </Form.Row>
                </Form>
                <div>{Object.keys(this.state.players).length !== 0 && <Players players={this.state.players} />}</div>
            </Container>
        );
    }
}

export default Input;
