import React from 'react';
import './Input.css'

class TextInput extends React.Component {
    render() {
        return (
            <div className='form-inputs'>
                <label className='form-label'>
                    {this.props.wert}
                    <input
                        type={this.props.type}
                        name={this.props.name}
                        placeholder= {this.props.placeholder}
                        className='form-input'
                        value={this.props.value}
                        onChange={this.props.onChange}/>
                </label>
            </div>
        );
    }
}

export default TextInput ;

