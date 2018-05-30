import rest, {parseAPIUrl, END_POINT_KEYS} from './api';

const getLoginUserByToken = () => {
  return rest.get(parseAPIUrl(END_POINT_KEYS.AUTH));
};

const login = (email, password) => {
  const loginParams = new URLSearchParams();
  loginParams.append('email', email);
  loginParams.append('password', password);
  return rest.post(parseAPIUrl(END_POINT_KEYS.AUTH), loginParams);
};

export default {
  getLoginUserByToken,
  login,
};