import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const SIZES = ['medium', 'large']
const VARIANTS = ['success', 'error']

export default class Input extends PureComponent {
  onChangeHandler (e) {
    const value = e.target.value
    this.props.onChange(e, value)
  }
  get deferredProps () {
    return this.props.deferredProps // TODO: omit values?
  }
  render () {
    const {disabled, blocked, size, variant, value, type, placeholder} = this.props
    const className = cx(this.props.deferredProps.className, {
      'us-form-input': true,
      'us-form-input--large': size === 'large',
      [`us-form-input--${variant}`]: variant,
      'us-form-input--blocked': blocked,
      'us-form-input--disabled': disabled
    })
    return <input {...this.deferredProps}
      disabled={disabled}
      className={className}
      onChange={this.onChangeHandler.bind(this)}
      type={type}
      value={value}
      placeholder={placeholder} />
  }
}

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  variant: PropTypes.oneOf(VARIANTS),
  disabled: PropTypes.bool,
  blocked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  deferredProps: PropTypes.object.isRequired
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  disabled: false,
  blocked: false,
  onChange: () => {},
  deferredProps: {}
}
