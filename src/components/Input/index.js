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
  get className () {
    const {inputSize, variant, blocked, disabled} = this.props
    return cx(this.props.className, {
      'us-form-input': true,
      'us-form-input--large': inputSize === 'large',
      [`us-form-input--${variant}`]: variant,
      'us-form-input--blocked': blocked,
      'us-form-input--disabled': disabled
    })
  }
  get cleanProps () {
    return omit(
      this.props,
      'className',
      'inputSize', // TODO: revert to `size`, and pass `htmlSize` -> `size`
      'variant',
      'disabled',
      'blocked',
      'onChange'
    )
  }
  render () {
    return (
      <input {...this.cleanProps}
        className={this.className}
        onChange={this.onChangeHandler} />
    )
  }
}

Input.propTypes = {
  type: PropTypes.string,
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
