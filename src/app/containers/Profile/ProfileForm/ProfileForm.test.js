import React from 'react';
import ReactDOM from 'react-dom';
import ProfileForm from './ProfileForm';

it('ProfileForm Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
