import { combineReducers } from 'redux';

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
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
        case "LOGIN_REQUEST":
            return {
              ...state,
            };

        case "LOGIN_RESPONSE":
            return {
              ...state,
            };

        default:
            return state;
    }
};

export default combineReducers({
    math: mathReducer,
    user: userReducer,
    login: loginReducer,
});