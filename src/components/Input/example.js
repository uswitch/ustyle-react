import React, {PureComponent} from 'react'
import assign from 'object.assign'
import Input from './index'

export default class InputExample extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }
  componentDidMount () {
    this.setState({ value: 'example' })
  }
  updateValue (value) {
    let variant
    if (value.length === 0) variant = null
    else variant = (value || '').match('@') ? 'success' : 'error'
    console.log(value, variant)
    this.setState((state) => assign({}, state, { value, variant }), () => {
      console.log('state', this.state)
    })
  }
  render () {
    return (
      <Input {...this.state}
        type='email'
        inputSize='large'
        deferredProps={{id: 'email'}}
        onChange={(e, value) => this.updateValue(value)}
        placeholder='you@example.com' />
    )
  }
}
