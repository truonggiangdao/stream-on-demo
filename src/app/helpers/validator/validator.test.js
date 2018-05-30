import validator, {INPUT_FIELDS} from '../validator';

it('Validate field errors', () => {
  const result = validator.validate('abc', INPUT_FIELDS.EMAIL);
  if (result.valid) {
    throw new Error('Validate field errors not working. Expected valid: FALSE');
  }
  if (!result.errors || result.errors.constructor !== Array || result.errors.length === 0) {
    throw new Error('Validate field errors not return errors as ARRAY');
  }

  result.errors.forEach(error => {
    if (!error || error.constructor !== String) {
      throw new Error('Validate field errors not return error messages as string');
    }
  });
});

it('Validate field valid', () => {
  const result2 = validator.validate('abcd@gmail.com', INPUT_FIELDS.EMAIL);
  if (!result2.valid) {
    throw new Error('Validate field valid not working. Expected valid: TRUE');
  }
  if (!result2.errors || result2.errors.constructor !== Array) {
    throw new Error('Validate field valid not return errors as ARRAY');
  }
  if (result2.errors.length > 0) {
    throw new Error('Validate field valid should return errors as EMPTY ARRAY');
  }
});