import React, {PureComponent} from 'react'
import TextArea from './index'

export default class TextAreaExample extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { value: 'test...' }
  }
  onChange (e, value) {
    this.setState({ value: e.target.value })
  }
  render () {
    return (
      <div>
        <TextArea value={this.state.value} blocked disabled onChange={this.onChange.bind(this)} />
        <TextArea value={this.state.value} onChange={this.onChange.bind(this)} />
      </div>
    )
  }
}
