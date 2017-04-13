import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const VARIANTS = ['error', 'success'];

export default class ValidationMessage extends PureComponent {
  get className () {
    const {variant} = this.props;
    return cx({
      'us-validation': true,
      [`us-validation--${variant}`]: variant
    });
  }
  render () {
    const {children} = this.props;
    return (
      <div className={this.className}>
        <div className='us-validation__icon' />
        <div className='us-validation__message'>{children}</div>
      </div>
    );
  }
}

ValidationMessage.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  children: PropTypes.node.isRequired
};

ValidationMessage.defaultProps = {
  variant: 'error'
};
