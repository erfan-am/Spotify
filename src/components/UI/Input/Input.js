import React from 'react';
import './Input.scss';
const Input = (props) => {
    const element=props.element === "input" ? 
    (<input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className="input_group_input"/>):
    (<textarea/>)
    return (
        <div className="input_group">
           {props.label ? <label className="input_group_label">{props.label}</label> : null}
            {element}
        </div>
    )
}

export default Input
