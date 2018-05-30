import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Profile from './Profile';
import store from '@/store';

it('Profile Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <Provider store={store}>
      <Profile />
    </Provider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
