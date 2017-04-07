import React, {PropTypes, PureComponent} from 'react';
import cx from 'classnames';

const VARIANTS = ['error', 'success'];
const SIZES = ['large'];

export default class Input extends PureComponent {
  onKeyDown(e) {
    if (e.key === 'Enter' && this.props.type !== 'submit') {
      e.preventDefault();
    }
  }

  get className () {
    const {size, variant, blocked, disabled} = this.props;

    return cx({
      'us-form-input': true,
      [`us-form-input--${variant}`]: variant,
      [`us-form-input--${size}`]: size,
      'us-form-input--blocked': blocked,
      'us-form-input--disabled': disabled
    });
  }

  render() {
    return (
      <input
        className={this.className}
        type={this.props.type}
        value={this.props.value}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange} />
    );
  }
};

Input.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  size: PropTypes.oneOf(SIZES),
  type: PropTypes.string.isRequired,
  blocked: PropTypes.bool,
  value: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: 'text',
  blocked: false,
  disabled: false,
  onChange: e => {
    console.log(e);
  }
};
