import React from 'react';
import './Button.scss';

const Button = (props) => (
  <button
    className={`button ${props.primary ? 'button-primary' : ''} ${props.block ? 'button-block' : ''}`}
    text={props.text || 'Button'}
    onClick={() => props.onClick()}>
    {props.text || 'Button'}
  </button>
);

export default Button;