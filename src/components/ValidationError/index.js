import React from 'react';
import PropTypes from 'prop-types';
import ValidationMessage from '../ValidationMessage';

export default function ValidationError (props) {
  return <ValidationMessage {...props} variant='error' />;
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired
};
