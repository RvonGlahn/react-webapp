import React from "react";
import "./Input.css";

function TextInput(props) {
    return (
        <div className="form-inputs">
            <label className="form-label">
                {props.wert}
                <input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    className="form-input"
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
        </div>
    );
}

export default TextInput;
