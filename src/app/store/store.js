import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import { updateToken } from './userActions';
import { retrieveCurrentUser } from './userActions';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);

export default store;

// store.dispatch(updateToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJleHAiOiIxNTI3NjY2ODAxIiwiaWF0IjoxNTI3NjYzMjAxfQ.xdrW-_jQE-wm556mfxRO0C1p7EBhbsRhlGA0XGVRpJN0-9kyGKU4zSAtZBzQpg4hzTYjqVyJOJ3C-uta-Ogj4Y7J0xPXRM0tqcHZPdwRKI03w5KeDoXyVJAwoH_y_8K0Mtkx8ci7NPA6UmnUML9qvWazvXbzLfbhEEk_Mts0DllHOh5bYvegD8HC0xm3HMkAKxyC_Bvv-79ODtRB42KKJU65wD3xRU8EbkXeQ0jESlNM8QpALrv5sXfkczk6-FEJlSLPlp3QuihVZ_mHHccSsk0PqGwhyBYKJlMm_Buz39zyy1ZlXmH_BBSEDqQFHYImF5WwALBO-cbxwnFOTqT7ww'));
retrieveCurrentUser(store.dispatch);