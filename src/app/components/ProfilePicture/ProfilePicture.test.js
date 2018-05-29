import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePicture from './ProfilePicture';

it('ProfilePicture Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfilePicture />, div);
  ReactDOM.unmountComponentAtNode(div);
});
