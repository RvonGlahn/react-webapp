import React from 'react';
import './Input.css';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PlayerView from './PlayerView';
import InputSuggest from './InputSuggest';
import InputDropDown from './InputDropDown';
import { loadPlayer, loadSuggest, loadLists, loadFIFAVersion } from '../../services/fifa';

class InputForm extends React.Component {
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
            fifa_versions: [22, 21, 20, 19, 18, 17, 16, 15],
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

        if (this.state.name.length >= 4 && event.target.name === 'name') {
            let sanitized_name = this.state.name.replace(reg, '');

            let suggest_json = await loadSuggest(sanitized_name);
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

        this.setState({ ...this.state, players: players, suggestion: [] });
    }

    render() {
        return (
            <Container style={{ paddingTop: '75px', paddingBottom: '300px' }}>
                <h1 className="heading">Search Players in FIFA</h1>
                <Form>
                    <Form.Row>
                        <InputSuggest label_text="name" suggestion={this.state.suggestion} handleChange={this.handleChange} />
                        <InputDropDown
                            dropList={this.state['posList']}
                            value={this.state.position}
                            handleChange={this.handleChange}
                            labelName="position"
                            objectKey="position"
                        />
                    </Form.Row>
                    <Form.Row>
                        <InputDropDown
                            dropList={this.state['attrList']}
                            value={this.state.ability1Name}
                            handleChange={this.handleChange}
                            labelName="skill 1"
                            objectKey="ability1Name"
                        />
                        <Form.Group as={Col} controlId="formGridAtt1Value">
                            <Form.Label>value 1</Form.Label>
                            <Form.Control name="ability1Value" value={this.state.ability1Value} onChange={this.handleChange} />
                        </Form.Group>
                        <InputDropDown
                            dropList={this.state['attrList']}
                            value={this.state.ability2Name}
                            handleChange={this.handleChange}
                            labelName="skill 2"
                            objectKey="ability2Name"
                        />
                        <Form.Group as={Col} controlId="formGridAtt2Value">
                            <Form.Label>value 2</Form.Label>
                            <Form.Control type="text" name="ability2Value" value={this.state.ability2Value} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAge">
                            <Form.Label>max. age</Form.Label>
                            <Form.Control type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridWert">
                            <Form.Label>max. player value</Form.Label>
                            <Form.Control type="text" name="player_value" value={this.state.player_value} onChange={this.handleChange} />
                        </Form.Group>
                        <InputDropDown
                            dropList={this.state['fifa_versions']}
                            value={this.state.fifa_version}
                            handleChange={this.handleChangeFIFA}
                            labelName="FIFA Version"
                            objectKey="fifa_version"
                        />
                    </Form.Row>
                    <Form.Row>
                        <Col></Col>
                        <Col>
                            <ButtonSubmit onClick={this.handleClick} />
                        </Col>
                        <Col></Col>
                    </Form.Row>
                </Form>
                <div>{Object.keys(this.state.players).length !== 0 && <PlayerView players={this.state.players} />}</div>
            </Container>
        );
    }
}

export default InputForm;
