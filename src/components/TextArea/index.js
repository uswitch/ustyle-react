import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

export default class TextArea extends PureComponent {
  constructor (props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  get className () {
    const {blocked, disabled} = this.props
    return cx({
      'us-form-textarea': true,
      'us-form-textarea--blocked': blocked,
      'us-form-textarea--disabled': disabled
    })
  }
  onChangeHandler (e) {
    this.props.onChange(e, e.target.value)
  }
  get cleanProps () {
    return omit(
      this.props,
      'className',
      'blocked', // only used for className
      'onChange' // use onChangeHandler instead
    )
  }
  render () {
    return (
      <textarea
        {...this.cleanProps}
        className={this.className}
        onChange={this.onChangeHandler} />
    )
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  blocked: PropTypes.bool,
  disabled: PropTypes.bool
}

TextArea.defaultProps = {
  blocked: false,
  disabled: false,
  onChange: () => {}
}
