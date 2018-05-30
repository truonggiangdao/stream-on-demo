import rest, {parseAPIUrl, END_POINT_KEYS} from '@/api';

export const retrieveCurrentUser = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    rest.get(parseAPIUrl(END_POINT_KEYS.AUTH)).then(res => {
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
  return rest.post(parseAPIUrl(END_POINT_KEYS.AUTH), {
    email: payload.email,
    password: payload.password,
  })
  .then(res => {
    dispatch(updateToken(res.data.auth_token));
    dispatch(updateProfile(res.data));
    dispatch(loginResponse('LOGIN_CLEAR_ERROR'));
  })
  .catch(() => {
    dispatch(loginResponse('LOGIN_SET_ERROR'));
  });
};

export const loginResponse = type => { 
  return { type };
};

export const loginRequest = (email, password) => {
  return {
    type: 'LOGIN_REQUEST',
    payload: {email, password}
  };
};
