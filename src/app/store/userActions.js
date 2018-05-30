export const setName = (name) => {
  return {
    type: "SET_NAME",
    payload: name
  };
};

export const setAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age
  };
};

export const loginRequest = (email, password) => {
  return {
    type: "LOGIN_REQUEST",
    payload: {email, password}
  };
};
