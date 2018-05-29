import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';

it('Link Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
  ReactDOM.unmountComponentAtNode(div);
});
