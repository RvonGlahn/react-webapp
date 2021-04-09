import React from "react";
import "./Button.css";
import { Button } from "react-bootstrap";

function ButtonSubmit(props) {
    return (
        <Button
            type="button"
            className="btn btn-primary btn--primary--form blue btn--wide"
            onClick={props.onClick}
        >
            Suchen
        </Button>
    );
}

export default ButtonSubmit;
