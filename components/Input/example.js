import React from 'react';
import Input from './index';

export default () => (
  <div>
    <div>
      <Input type="text" value="a" />
    </div>
    <div>
      <Input type="text" value="a" size="large" />
    </div>
    <div>
      <Input type="text" value="a" variant="error" />
    </div>
    <div>
      <Input type="text" value="a" variant="success" />
    </div>
    <div>
      <Input type="text" value="a" disabled />
    </div>
  </div>
);
