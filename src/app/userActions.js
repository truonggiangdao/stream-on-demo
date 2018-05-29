const setName = (name) => {
  return {
    type: "SET_NAME",
    payload: name
  };
};

const setAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age
  };
};

export default {
  setName,
  setAge
};