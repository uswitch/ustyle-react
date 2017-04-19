import React from 'react';
import Tooltip from './index';
import Field from '../Field';

export default () => {
  const text = <span><strong>Tooltip</strong> message content</span>;
  return (
    <Tooltip text={text} position='left'>
      <Field>
        <label htmlFor='name'>Name</label>
        <input
          className='us-form-input'
          id='name'
          name='name'
          placeholder='Please enter your name' />
      </Field>
    </Tooltip>
  );
};
