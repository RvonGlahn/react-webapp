import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { PropTypes } from 'prop-types';

function InputText({ label_text, objectKey, value, handleChange }) {
    return (
        <Form.Group as={Col} controlId={label_text + '_id'}>
            <Form.Label>{label_text}</Form.Label>
            <Form.Control name={objectKey} value={value} onChange={handleChange} />
        </Form.Group>
    );
}

InputText.propTypes = {
    label_text: PropTypes.string,
    objectKey: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
};

export default InputText;
