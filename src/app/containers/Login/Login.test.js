import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from './Login';
import store from '@/store';

it('Login Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.render((
    <Provider store={store}>
      <Login />
    </Provider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
