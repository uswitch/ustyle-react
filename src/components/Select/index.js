import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

const VARIANTS = ['error', 'success']

export default class Select extends PureComponent {
  onChangeHandler (e) {
    const item = this.props.items.filter((item) => (
      item.value === e.target.value
    ))[0]
    this.props.onChange(e, item)
  }
  get sizeGreaterThanOne () {
    return this.props.size && (parseInt(this.props.size, 10) > 1)
  }
  get className () {
    const { disabled, variant, blocked } = this.props
    return cx({
      'us-form-select': true,
      [`us-form-select--${variant}`]: variant,
      'us-form-select--blocked': blocked,
      'us-form-select--multiple': this.sizeGreaterThanOne,
      'us-form-select--disabled': disabled
    })
  }
  get options () {
    return this.props.items.map((item, i) => (
      <option key={i} value={item.value}>{item.text}</option>
    ))
  }
  render () {
    const props = omit(this.props, 'className', 'items', 'onChange', 'blocked', 'variant')

    return (
      <select
        {...props}
        className={this.className}
        onChange={this.onChangeHandler.bind(this)}>
        {this.options}
      </select>
    )
  }
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })).isRequired,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(VARIANTS),
  disabled: PropTypes.bool,
  blocked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

Select.defaultProps = {
  disabled: false,
  blocked: false,
  onChange: () => {}
}
