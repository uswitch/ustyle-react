import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class TextArea extends PureComponent {
  get className () {
    const {blocked, disabled} = this.props;
    return cx({
      'us-form-textarea': true,
      'us-form-textarea--blocked': blocked,
      'us-form-textarea--disabled': disabled
    });
  }
  onChange (e) {
    this.props.onChange(e, e.target.value);
  }
  render () {
    return (
      <textarea
        name={this.props.name}
        className={this.className}
        disabled={this.props.disabled}
        value={this.props.value}
        onChange={this.props.onChange} />
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  blocked: PropTypes.bool,
  disabled: PropTypes.bool
};

TextArea.defaultProps = {
  blocked: false,
  disabled: false,
  onChange: () => {}
};
