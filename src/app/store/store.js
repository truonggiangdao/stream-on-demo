import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import { login } from './userActions';
import { retrieveCurrentUser } from './userActions';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);

export default store;

retrieveCurrentUser(store.dispatch);

// login(store.dispatch, {
//   email: 'admin@test.test',
//   password: '123456',
// }).then(() => {
//   retrieveCurrentUser(store.dispatch);
// });