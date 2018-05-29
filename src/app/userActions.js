export function setName(name) {
  return {
    type: "SET_NAME",
    payload: name
  };
}

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age
  };
}

export function loginRequest(email, password) {
  return {
    type: "LOGIN_REQUEST",
    payload: {email, password}
  };
}