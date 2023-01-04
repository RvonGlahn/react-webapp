import styled from 'styled-components';
import colors from '../../constants/colors';

const BlogButton = styled.button`
    display: inline-block;
    color: ${colors.lightText};
    background-color: ${colors.primaryDark};
    opacity: 0.7;
    border: 1px solid ${colors.primaryDark};
    box-shadow: 1.5px 1.5px 2px ${colors.secondaryDark};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 8px;
    display: block;
    &:hover {
        opacity: 1;
        background-color: ${colors.secondaryDark};
        border: 1px solid ${colors.secondaryDark};
    }
`;

export default BlogButton;
