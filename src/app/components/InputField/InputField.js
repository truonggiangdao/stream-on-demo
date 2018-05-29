import React, { Component } from 'react';
import './InputField.scss';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }

  handleLabelClick() {
    this.inputEl.current.focus();
  }

  render() {
    return (
      <div className="group-input-field">
        <label className="input-field-label" htmlFor={this.props.name} onClick={() => this.handleLabelClick()}>
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
          placeholder={this.props.label || ''} />
      </div>
    );
  }
};

export default InputField;