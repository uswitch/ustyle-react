import React from 'react';
import InputGroup from './index';

export default () => (
  <div>
    <InputGroup text="@">
      <input className="us-form-input" type="text" id="email" placeholder="Email" />
    </InputGroup>

    <InputGroup text="kwh" position="right">
      <input className="us-form-input" type="text" id="email" placeholder="Email" />
    </InputGroup>

    <InputGroup icon="envelope" position="left">
      <input className="us-form-input" type="text" id="email" placeholder="Email" />
    </InputGroup>

    <InputGroup icon="envelope" position="left" blocked>
      <input className="us-form-input" type="text" id="email" placeholder="Email" />
    </InputGroup>

    <InputGroup icon="envelope" position="left" disabled>
      <input disabled className="us-form-input" type="text" id="email" placeholder="Email" />
    </InputGroup>
  </div>
)
  
