import React from 'react';
import './Button.scss';
const Button = (props) => {
return <button 
     className="button_component"
     onClick={props.onClick}
     type={props.type}
     style={{backgroundColor: props.bg && props.bg ,color:props.color ? props.color : "#333"}}>{props.children}</button>
}

export default Button
