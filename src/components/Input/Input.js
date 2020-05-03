import React from 'react';
// import './Input.css';

const Input = (props) => {
    return (
        <input
            className="form-control"
            maxLength={props.maxLength}
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            value={props.value}
            onChange={(event) => props.inputChangeHandler(event)} />
    );
};

export default Input;
