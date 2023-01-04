import React from 'react';
import './Button.css';
import { Button } from 'react-bootstrap';

function ButtonSubmit(props) {
    return (
        <Button className="btn-primary btn--primary--form btn--wide" onClick={props.onClick}>
            Search
        </Button>
    );
}

export default ButtonSubmit;
