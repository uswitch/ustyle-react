import React, {PureComponent} from 'react'
import Toggle from './index'

const items = [{
  disabled: false,
  text: '<strong>Yes</strong>, I like cheese',
  value: 1
}, {
  disabled: false,
  text: 'No, I hate cheese',
  value: false
}, {
  disabled: true,
  text: 'Cheese is not real',
  value: 'fake'
}]

export default class ToggleExample extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { toggleValue: true }
  }
  onChangeHandler (e, { value }) {
    this.setState({ toggleValue: value })
  }
  get jsonState () {
    return JSON.stringify(this.state)
  }
  render () {
    return (
      <div>
        <pre>{this.jsonState}</pre>

        <Toggle
          name='toggleExample'
          value={this.state.toggleValue}
          items={items}
          onChange={this.onChangeHandler.bind(this)} />
      </div>
    )
  }
}
