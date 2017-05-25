import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'

export default class ToggleYesNo extends PureComponent {
  render () {
    const { onChange, name, value } = this.props
    const items = [{ text: 'Yes', value: true }, { text: 'No', value: false }]

    return (
      <Toggle
        name={name}
        value={value}
        items={items}
        onChange={onChange} />
    )
  }
}

ToggleYesNo.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
