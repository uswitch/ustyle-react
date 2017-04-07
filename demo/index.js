import React from 'react';
import ReactDOM from 'react-dom';
import ExampleUSP from '../components/USP/example';
import ExampleButton from '../components/Button/example';
import ExampleBreadcrumbs from '../components/Breadcrumbs/example';
import ExampleProgressNavigation from '../components/ProgressNavigation/example';
import ExampleLoader from '../components/Loader/example';
import ExampleInput from '../components/Input/example';

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
    <h2>Input</h2>
    <ExampleInput />
  </div>
, document.getElementById('main'));
