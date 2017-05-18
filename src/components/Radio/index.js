import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';

export default class Radio extends PureComponent {
  get className () {
    return cx({
      "us-form-input": true,
      "us-form-input--disabled": this.props.disabled,
    })
  }

  render () {
    const { onChange, checked, children, name, ...other} = this.props;
    const newProps = omit(this.props, 'type', 'children', 'className', 'onChange');

    return (
      <label>
        <input {...newProps} checked={checked} className={this.className} name={name} type="radio" onChange={onChange} />
        {children}
      </label>
    )
  }
}

Radio.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
