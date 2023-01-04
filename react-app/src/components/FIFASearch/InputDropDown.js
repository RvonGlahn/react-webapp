import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { PropTypes } from 'prop-types';

function InputDropDown({ dropList, value, handleChange, labelName, objectKey }) {
    return (
        <Form.Group as={Col} controlId={'formGrid' + labelName}>
            <Form.Label>{labelName}</Form.Label>
            <Form.Control as="select" name={objectKey} value={value} onChange={handleChange}>
                {dropList.map((position, i) => (
                    <option value={position} key={i}>
                        {position}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
}

InputDropDown.propTypes = {
    dropList: PropTypes.array,
    value: PropTypes.string,
    labelName: PropTypes.string,
    handleChange: PropTypes.func,
};

export default InputDropDown;
