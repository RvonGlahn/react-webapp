import React from 'react';
import './Input.css';
import ButtonSubmit from '../Buttons/ButtonSubmit';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import Players from './Players';
import { loadPlayer, loadSuggest, loadLists } from '../../services/fifa';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '-',
            age: '',
            ability1Name: '-',
            ability1Value: '',
            ability2Name: '-',
            ability2Value: '',
            suggestion: [],
            posList: [],
            attrList: [],
            players: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        this.handleLoad();
    }

    async handleLoad() {
        let names = await loadLists();
        names = names.substring(2, names.length - 2).replaceAll("'", '');
        names = names.replace('[', '');
        names = names.split(',');

        this.setState({
            ...this.state,
            posList: ['-'].concat(names.slice(48)),
            attrList: ['-'].concat(names.slice(0, 47)),
        });
    }

    async handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        if (this.state.name.length >= 4) {
            let suggest = await loadSuggest(this.state.name);
            // convert this res in python to json
            suggest = suggest.substring(1, suggest.length - 1).replaceAll("'", '');
            suggest = suggest.split(',');
            this.setState({ ...this.state, suggestion: suggest });
        }
    }

    async handleClick() {
        let reqJSON = Object.assign({}, this.state);

        reqJSON.position = reqJSON.position.trim();
        reqJSON.ability1Name = reqJSON.ability1Name.trim();
        reqJSON.ability2Name = reqJSON.ability2Name.trim();

        const players = await loadPlayer(reqJSON);
        this.setState({ ...this.state, players: players });

        this.setState({
            ...this.state,
            suggestion: [],
        });
    }

    render() {
        return (
            <div>
                <div className="form-container">
                    <form className="form" autoComplete="off">
                        <h1 className="heading">Suche Spieler in FIFA 21</h1>
                        <div className="suggest">
                            <label className="form-label">Name</label>
                            <input className="form-input form-inputs" list="suggest" name="name" wert="Name" onChange={this.handleChange} />
                            <datalist id="suggest">
                                {this.state.suggestion ? (
                                    this.state.suggestion.map((playerName, i) => <option value={playerName} key={i}></option>)
                                ) : (
                                    <option></option>
                                )}
                            </datalist>
                        </div>
                        <SelectInput name="position" liste={this.state.posList} title="Position" onChange={this.handleChange} />
                        <TextInput type="number" name="age" wert="Max. Alter" placeholder="0 - 99" onChange={this.handleChange} />
                        <SelectInput name="ability1Name" liste={this.state.attrList} title="1. Fähigkeit" onChange={this.handleChange} />
                        <TextInput type="number" name={'ability1Value'} wert="" placeholder="Minimum Wert (0 - 99)" onChange={this.handleChange} />
                        <SelectInput name="ability2Name" liste={this.state.attrList} title="2. Fähigkeit" onChange={this.handleChange} />
                        <TextInput type="number" name="ability2Value" wert="" placeholder="Minimum Wert (0 - 99)" onChange={this.handleChange} />
                        <ButtonSubmit buttonStyle="btn--primary--form" buttonSize="btn--wide" buttonColor="blue" onClick={this.handleClick} />
                    </form>
                </div>
                <div>
                    {typeof this.state.players[0] === 'object' && this.state.players[0].data !== undefined && <Players values={this.state.players} />}
                </div>
            </div>
        );
    }
}

export default Input;
