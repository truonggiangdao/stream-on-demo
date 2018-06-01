let state = {
  firstName: 'Vi',
  lastName: 'Ha',
  errors: {
    // ERROR
    firstName: '',
    lastName: '',
  },
};

const setState = (object) => {
  state = Object.assign(state, object);
};

setState({ firstName: 'Vi Ha', errors: { firstName: 'ERROR' } });
console.log(state);

export default state;
