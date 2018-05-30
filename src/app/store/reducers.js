import { combineReducers } from 'redux';

const userReducer = (state = {
  firstName: 'Sample',
  lastName: 'User',
  email: 'sample_user@gmail.com'
}, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      state = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
      };
      break;

    default:
      break;
  }
  return state;
};

const loginReducer = (state = {
  email: '',
  password: ''
}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
      };

    case 'LOGIN_RESPONSE':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  login: loginReducer,
});