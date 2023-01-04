import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function TextGrid({ itemList }) {
    const newRows = itemList.map((row) => (
        <Row xs="auto">
            {row.map((item) => (
                <Col>
                    <p className="lead">{item}</p>
                </Col>
            ))}
        </Row>
    ));

    return <Container>{newRows}</Container>;
}

TextGrid.propTypes = {
    itemList: PropTypes.array.isRequired,
};

export default TextGrid;
