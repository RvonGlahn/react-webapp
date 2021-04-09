import React from "react";
import "./Input.css";

class SelectInput extends React.Component {
    render() {
        return (
            <div className="form-inputs">
                <label className="form-label">
                    {this.props.title}
                    <select
                        name={this.props.name}
                        className="form-input"
                        value={this.props.value}
                        onChange={this.props.onChange}
                    >
                        {this.props.liste.map((position, i) => (
                            <option value={position} key={i}>
                                {position}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        );
    }
}

export default SelectInput;
