import React from 'react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../../constants/colors.js';
import BlogButton from '../../components/Buttons/BlogButton';
import PropTypes from 'prop-types';

export const StyledContainer = styled(Container)`
    border: 0;
    border-radius: 12px;
    box-shadow: 2px 2px 6px ${colors.secondaryDark};
    padding: 4rem 8rem;
    background-color: #fffdfa;
`;

function MarkDownView({ clickEvent, content }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '5rem' }}>
            <StyledContainer>
                <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} className="prose" children={content} />
                <br></br>
                <BlogButton onClick={clickEvent}>Go back</BlogButton>
            </StyledContainer>
        </div>
    );
}

MarkDownView.propTypes = {
    content: PropTypes.string.isRequired,
    clickEvent: PropTypes.func,
};

export default MarkDownView;
