import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function InputSuggest({ label_text, suggestion, handleChange }) {
    return (
        <Form.Group as={Col} controlId="formGridName">
            <Form.Label>{label_text}</Form.Label>
            <input type="text" className="form-input" list="suggest" name="name" wert="Name" onChange={handleChange} autoComplete="new-password" />
            <datalist id="suggest">
                {suggestion ? suggestion.map((playerName, i) => <option value={playerName} key={i}></option>) : <option></option>}
            </datalist>
        </Form.Group>
    );
}

InputSuggest.propTypes = {
    label_text: PropTypes.string,
    suggestion: PropTypes.array,
    handleChange: PropTypes.func,
};

export default InputSuggest;
