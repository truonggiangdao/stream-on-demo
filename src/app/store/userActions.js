import rest, {parseAPIUrl, END_POINT_KEYS} from '@/api';

export const retrieveCurrentUser = (dispatch) => {
  rest.get(parseAPIUrl(END_POINT_KEYS.AUTH)).then(res => {
    console.log(res);
    dispatch(updateProfile(res.data));
  })
  .catch(err => {
    console.log('err', err);
  });
};

export const updateToken = (token) => {
  localStorage.setItem('token', token);
  return {
    type: 'UPDATE_TOKEN',
    payload: token
  };
};

export const updateProfile = (profile) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: profile
  };
};

export const loginRequest = (email, password) => {
  return {
    type: 'LOGIN_REQUEST',
    payload: {email, password}
  };
};
