import React from 'react';
import ReactDOM from 'react-dom';
import USP from '../src/components/USP/example';
import Button from '../src/components/Button/example';
import Breadcrumbs from '../src/components/Breadcrumbs/example';
import ProgressNavigation from '../src/components/ProgressNavigation/example';
import LoaderContainer from '../src/components/LoaderContainer/example';
import Icon from '../src/components/Icon/example';
import ValidationError from '../src/components/ValidationError/example';
import ValidationMessage from '../src/components/ValidationMessage/example';
import Select from '../src/components/Select/example';
import Toggle from '../src/components/Toggle/example';
import InputGroup from '../src/components/InputGroup/example';

ReactDOM.render(
  <div className='us-container'>
    <h2>Progress Navigation</h2><ProgressNavigation /><hr />
    <h2>Breadcrumbs</h2><Breadcrumbs /><hr />
    <h2>USPs</h2><USP /><hr />
    <h2>Buttons</h2><Button /><hr />
    <h2>LoaderContainer</h2><LoaderContainer /><hr />
    <h2>Icons</h2><Icon /><hr />
    <h2>Validation Error</h2><ValidationError />
    <h2>Validation Message</h2><ValidationMessage />
    <h2>Select</h2><Select />
    <h2>Toggle</h2><Toggle />
    <h2>InputGroup</h2><InputGroup />
  </div>
, document.getElementById('main'));
