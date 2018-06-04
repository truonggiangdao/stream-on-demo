let state = {
  firstName: 'Vi',
  lastName: 'Ha',
  errors: {
    firstName: '',
    lastName: '',
  },
};

const setState = (object) => {
  let arr = [];
  for(let i = 0; i < Object.keys(object).length; i++) {
    if (typeof Object.values(object)[i] === 'object') {
      arr.push(Object.keys(object)[i]);
    }
  }
  const getKey = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = Object.assign({}, state[arr[i]], object[arr[i]]);
    }
    return obj;
  };
  // state = Object.assign(state, object, {
  //   errors: Object.assign({}, state.errors, object.errors)
  // });
  state = Object.assign(state, object, getKey(arr));
};

setState({ firstName: 'Vi Ha', errors: { firstName: 'ERROR'} });

export default state;
