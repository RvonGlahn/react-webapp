import React from "react";
import "./Input.css";
import { useEffect } from "react";

function SelectInput(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="form-inputs">
            <label className="form-label">
                {props.title}
                <select
                    name={props.name}
                    className="form-input"
                    value={props.value}
                    onChange={props.onChange}
                >
                    {props.liste.map((position, i) => (
                        <option value={position} key={i}>
                            {position}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default SelectInput;
