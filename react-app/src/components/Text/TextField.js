import React from 'react';
import { useEffect } from 'react';
import colors from '../../constants/colors';
import styled from 'styled-components';
import { Jumbotron } from 'reactstrap';
import { Container, Col } from 'react-bootstrap';
import TextGrid from './TextGrid';
import PropTypes from 'prop-types';

export const StyledTitle = styled.h1`
    color: ${colors.primaryDark};
    opacity: 0.8;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
`;

const TopLine = styled.h3`
    color: ${colors.primaryDark};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

function TextField({ title, text, subtitle, items }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingLeft: '80px', paddingRight: '80px', paddingBottom: '80px' }}>
            <Container fluid="xl">
                <Jumbotron style={{ backgroundColor: colors.secondary }}>
                    <Container>
                        <Col xs={12} md={8}>
                            <StyledTitle>{title}</StyledTitle>
                            <p className="lead">{text}</p>
                            <br></br>
                        </Col>
                    </Container>
                    <hr className="my-2" />
                    <br></br>
                    <TopLine>{subtitle}</TopLine>
                    <TextGrid itemList={items} />
                </Jumbotron>
            </Container>
        </div>
    );
}

TextField.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    subtitle: PropTypes.string,
    items: PropTypes.array,
};

export default TextField;
