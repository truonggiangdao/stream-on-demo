import state from './sampleCode';

// npm run test sampleCode
it('sampleCode:Check state.firstName', () => {
  if (!state.firstName || state.firstName !== 'Vi Ha') {
    throw new Error('invalid state.firstName');
  }
});

it('sampleCode:Check state.lastName', () => {
  if (!state.lastName || state.lastName !== 'Ha') {
    throw new Error('invalid state.lastName');
  }
});

it('sampleCode:Check state.errors', () => {
  if (!state.errors || state.errors.constructor !== Object) {
    throw new Error('invalid state.errors');
  }
});

it('sampleCode:Check state.errors.firstName', () => {
  if (state.errors && state.errors.constructor === Object) {
    if (!state.errors.firstName || state.errors.firstName !== 'ERROR') {
      throw new Error('invalid state.errors.firstName');
    }
  }
});

it('sampleCode:Check state.errors.lastName', () => {
  if (state.errors && state.errors.constructor === Object) {
    if (state.errors.lastName) {
      throw new Error('invalid state.errors.lastName');
    }
  }
});
