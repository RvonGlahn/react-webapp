import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../../constants/colors';
import PropTypes from 'prop-types';
import BlogButton from '../../components/Buttons/BlogButton';

export const StyledCard = styled(Card)`
    border: 0;
    border-radius: 12px;
    box-shadow: 2px 2px 6px ${colors.secondaryDark};
`;

const StyledHeader = styled(Card.Header)`
    background-color: ${colors.secondary};
    color: ${colors.darkText};
    font-size: 1.5em;
    opacity: 0.9;
`;

function TextCard({ title, text, clickEvent }) {
    return (
        <StyledCard>
            <StyledHeader>{title}</StyledHeader>
            <Card.Body>
                <Card.Text>{text}</Card.Text>
                <BlogButton onClick={clickEvent}>Read more ...</BlogButton>
            </Card.Body>
        </StyledCard>
    );
}

TextCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    clickEvent: PropTypes.func,
};

export default TextCard;
