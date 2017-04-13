import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const VARIANTS = ['blocked', 'inline'];

export default class Field extends PureComponent {
  render () {
    const { variant, children } = this.props;
    return (
      <div className={cx({
        'us-field': true,
        [`us-field--${variant}`]: variant
      })} children={children} />
    );
  }
}

Field.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  children: PropTypes.node.isRequired
};
