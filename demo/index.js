import React from 'react';
import ReactDOM from 'react-dom';
import ExampleUSP from '../dist/components/USP/example';
import ExampleButton from '../dist/components/Button/example';
import ExampleBreadcrumbs from '../dist/components/Breadcrumbs/example';
import ExampleProgressNavigation from '../dist/components/ProgressNavigation/example';
import ExampleLoader from '../dist/components/Loader/example';

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
