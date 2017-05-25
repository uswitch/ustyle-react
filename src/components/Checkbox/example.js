import React, {PureComponent} from 'react'
import Field from '../Field/index'
import Checkbox from './index'

const OPTIONS = ['email', 'telephone', 'pager', 'carrier pigeon']

export default class CheckboxExample extends PureComponent {
  constructor (props) {
    super(props)
    this.state = { email: true }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, value) {
    this.setState((state) => {
      const newState = Object.assign({}, state, { [value]: !state[value] })
      console.log(newState)
      return newState
    })
  }

  render () {
    return (
      <Field variant='blocked'>
        <label>How would you like to be contacted?</label>
        <div className='us-field-toggle'>
          {OPTIONS.map((option, i) => (
            <Checkbox
              key={option}
              name='radio'
              disabled={i === 2}
              value={option}
              checked={this.state[option] || false}
              onChange={this.handleChange} children={option} />
          ))}
        </div>
      </Field>
    )
  }
}
