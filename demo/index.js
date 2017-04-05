import React from 'react';
import ReactDOM from 'react-dom';
import ExampleUSP from '../components/USP/example';
import ExampleButton from '../components/Button/example';
import ExampleBreadcrumbs from '../components/Breadcrumbs/example';
import ExampleProgressNavigation from '../components/ProgressNavigation/example';

ReactDOM.render(
  <div className='us-container'>
    <ExampleUSP />
    <ExampleButton />
    <ExampleBreadcrumbs />
    <ExampleProgressNavigation />
  </div>
, document.getElementById('main'));
