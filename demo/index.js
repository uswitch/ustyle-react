import React from 'react';
import ReactDOM from 'react-dom';
import ExampleUSP from '../lib/USP/example';
import ExampleButton from '../lib/Button/example';
import ExampleBreadcrumbs from '../lib/Breadcrumbs/example';
import ExampleProgressNavigation from '../lib/ProgressNavigation/example';
import ExampleLoader from '../lib/Loader/example';

ReactDOM.render(
  <div className='us-container'>
    <h2>Progress Navigation</h2>
    <ExampleProgressNavigation />
    <hr />
    <h2>Breadcrumbs</h2>
    <ExampleBreadcrumbs />
    <hr />
    <h2>USPs</h2>
    <ExampleUSP />
    <hr />
    <h2>Buttons</h2>
    <ExampleButton />
    <hr />
    <h2>Loader</h2>
    <ExampleLoader />
  </div>
, document.getElementById('main'));
