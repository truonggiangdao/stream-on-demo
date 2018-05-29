import React from 'react';
import './InputField.scss';

const InputField = (props) => (
  <div className="group-input-field">
    <label className="input-field-label" htmlFor={props.name}>
      {props.label}
      { props.required && (
        <span className="input-field-required">*</span>
      )}:
    </label>
    <input className="input-field" type={props.type} name={props.name} />
  </div>
);

export default InputField;