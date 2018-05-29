import React, { Component } from 'react';
import './InputField.scss';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }

  onChange(event) {
    if (this.props.onChange && this.props.onChange.constructor === Function) {
      this.props.onChange(event, event.target.value);
    }
  }

  render() {
    return (
      <div className="group-input-field">
        <label className="input-field-label" htmlFor={this.props.name} onClick={() => this.inputEl.current.focus()}>
          {this.props.label || ''}
          { this.props.required && (
            <span className="input-field-required">*</span>
          )}:
        </label>
        <input
          className="input-field"
          ref={this.inputEl}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.label || ''}
          onKeyUp={(evt) => this.onChange(evt)}
          onBlur={(evt) => this.onChange(evt)} />
      </div>
    );
  }
};

export default InputField;