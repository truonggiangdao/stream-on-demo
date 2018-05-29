import React from 'react';
import '@/scss/variables.scss';
import './PageTitle.scss';

const PageTitle = (props) => (
  <div className="page-header-title">
    <div className="container">
      <h1>{props.title}</h1>
    </div>
  </div>
);

export default PageTitle;