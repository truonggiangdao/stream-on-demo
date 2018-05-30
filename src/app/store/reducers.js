import { combineReducers } from 'redux';

const userReducer = (state = {
  id: '',
  token: '',
  firstName: '',
  lastName: '',
  email: ''
}, action) => {
  switch (action.type) {
    case 'UPDATE_TOKEN':
      state = {
        ...state,
        token: action.payload,
      };
      break;

    case 'UPDATE_PROFILE':
      state = {
        ...state,
        id: action.payload.id,
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        email: action.payload.email,
      };
      break;

    default:
      break;
  }
  return state;
};

const loginReducer = (state = {error: ''}, action) => {
  switch (action.type) {
    case 'LOGIN_SET_ERROR':
      return {
        ...state,
        error: 'Login failed',
      };

    case 'LOGIN_CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  login: loginReducer,
});