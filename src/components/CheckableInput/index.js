import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

export default class CheckableInput extends PureComponent {
  constructor (props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  get className () {
    return cx({
      'us-form-input': true,
      'us-form-input--disabled': this.props.disabled
    });
  }
  onChangeHandler (e) {
    this.props.onChange(e, this.props.value);
  }
  render () {
    const { children } = this.props;
    const cleanProps = omit(this.props, 'className', 'children', 'onChange');
    return (
      <label>
        <input
          {...cleanProps}
          onChange={this.onChangeHandler}
          className={this.className} />
        {children}
      </label>
    );
  }
}

CheckableInput.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

CheckableInput.defaultProps = {
  disabled: false,
  checked: false
};
