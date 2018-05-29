import React from 'react';
import './Button.scss';

const Button = (props) => (
  <div className="">
    <button className="button" name={props.name} text={props.text} onClick={props.handleClickEvent}>{props.text}</button>
  </div>
);

export default Button;