import React from 'react';
import ReactDOM from 'react-dom';
import USP from '../src/components/USP/example';
import Button from '../src/components/Button/example';
import Breadcrumbs from '../src/components/Breadcrumbs/example';
import ProgressNavigation from '../src/components/ProgressNavigation/example';
import Loader from '../src/components/Loader/example';
import Icon from '../src/components/Icon/example';

ReactDOM.render(
  <div className='us-container'>
    <h2>Progress Navigation</h2><ProgressNavigation /><hr />
    <h2>Breadcrumbs</h2><Breadcrumbs /><hr />
    <h2>USPs</h2><USP /><hr />
    <h2>Buttons</h2><Button /><hr />
    <h2>Loader</h2><Loader /><hr />
    <h2>Icons</h2><Icon />
  </div>
, document.getElementById('main'));
