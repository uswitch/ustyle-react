import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

export default class CheckableInput extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  get className () {
    return cx(this.props.className, {
      'us-form-input': true,
      'us-form-input--disabled': this.props.disabled
    })
  }
  get cleanProps () {
    return omit(
      this.props,
      'className', // omit className as we over-write it with our own custom classes
      'children', // omit children, because an input element cannot have a child element
      'onChange' // omit onChange as we pass a custom onChangeHandler to the element
    )
  }
  onChangeHandler (e) {
    this.props.onChange(e, this.props.value)
  }
  render () {
    const { children } = this.props
    return (
      <label>
        <input
          {...this.cleanProps}
          onChange={this.onChangeHandler}
          className={this.className} />
        {children}
      </label>
    )
  }
}

CheckableInput.propTypes = {
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
}

CheckableInput.defaultProps = {
  disabled: false,
  checked: false
}
