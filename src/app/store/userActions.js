import rest, {parseAPIUrl, END_POINT_KEYS} from '@/api';

export const retrieveCurrentUser = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    rest.get(parseAPIUrl(END_POINT_KEYS.AUTH))
    .then(res => {
      dispatch(updateProfile(res.data));
    })
    .catch(() => {
      dispatch(updateToken(''));
    });
  }
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

export const login = (dispatch, payload) => {
  const loginParams = new URLSearchParams();
  loginParams.append('email', payload.email);
  loginParams.append('password', payload.password);
  return rest.post(parseAPIUrl(END_POINT_KEYS.AUTH), loginParams)
  .then(res => {
    dispatch(updateToken(res.data.auth_token));
    dispatch(updateProfile(res.data));
    dispatch(loginResponse('LOGIN_CLEAR_ERROR'));
  })
  .catch(err => {
    dispatch(loginResponse('LOGIN_SET_ERROR'));
    throw err;
  });
};

export const loginResponse = type => { 
  return { type };
};
