import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

const SIZES = ['medium', 'large']
const VARIANTS = ['success', 'error']

export default class Input extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler (e) {
    const value = e.target.value
    this.props.onChange(e, value)
  }
  render () {
    const {inputSize, variant, blocked, disabled} = this.props
    const props = omit(this.props, 'className', 'inputSize', 'variant', 'blocked')
    const className = cx(this.props.className, {
      'us-form-input': true,
      'us-form-input--large': inputSize === 'large',
      [`us-form-input--${variant}`]: variant,
      'us-form-input--blocked': blocked,
      'us-form-input--disabled': disabled
    })
    return <input
      {...props}
      className={className}
      onChange={this.onChangeHandler} />
  }
}

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputSize: PropTypes.oneOf(SIZES),
  variant: PropTypes.oneOf(VARIANTS),
  disabled: PropTypes.bool,
  blocked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
  type: 'text',
  inputSize: 'medium',
  disabled: false,
  blocked: false,
  onChange: () => {}
}
