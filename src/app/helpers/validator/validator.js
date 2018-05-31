import validator from 'validator';
import INPUT_FIELDS from './fields.const';
import MESSAGES from './messages.const';

const validationResponse = {
  valid: true,
  errors: [],
};

const validate = (value, type, rules) => {
  if (!type && !rules) {
    if (value) {
      return {
        ...validationResponse,
        valid: true,
        errors: [],
      };
    }
    return {
      ...validationResponse,
      valid: false,
      errors: [
        MESSAGES.REQUIRED,
      ],
    };
  }

  if (type === INPUT_FIELDS.EMAIL) {
    return validateEmail(value);
  }
  if (type === INPUT_FIELDS.EMAIL) {
    return validateEmail(value);
  }
};

const validateRequired = value => {
  if (!value) {
    return {
      ...validationResponse,
      valid: false,
      errors: [
        MESSAGES.REQUIRED,
      ],
    };
  }
  return null;
};

const validateString = value => {
  if (!value || value.constructor !== String) {
    return {
      ...validationResponse,
      valid: false,
      errors: [
        MESSAGES.INVALID,
      ],
    };
  }
  return null;
};

const validateStringLength = (value, min, max) => {
  if (min) {
    if (validateRequired(value)) {
      return validateRequired(value);
    }
  }
  if (validator.isLength(value, {min, max})) {
    return {
      ...validationResponse,
      valid: true,
      errors: [],
    };
  }
  return {
    ...validationResponse,
    valid: false,
    errors: [
      MESSAGES.INVALID,
    ],
  };
};

const validateEmail = value => {
  if (validateRequired(value)) {
    return validateRequired(value);
  }
  if (validator.isEmail(value)) {
    return {
      ...validationResponse,
      valid: true,
      errors: [],
    };
  }
  return {
    ...validationResponse,
    valid: false,
    errors: [
      MESSAGES.INVALID,
    ],
  };
};

const validatePassword = value => {
  if (validateRequired(value)) {
    return validateRequired(value);
  }
  if (validateString(value)) {
    return validateString(value);
  }
  return validateStringLength(value, 6, 15);
};

const validateName = value => {
  if (validateRequired(value)) {
    return validateRequired(value);
  }
  if (validateString(value)) {
    return validateString(value);
  }
  return validateStringLength(value, 2, 15);
};

export {
  INPUT_FIELDS,
  MESSAGES,
};

const validationHelper = {
  validate,
  validateEmail,
  validatePassword,
  validateName,
};

export default validationHelper;