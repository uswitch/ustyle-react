import React, {PureComponent} from 'react'
import Field from '../Field/index'
import Radio from './index'

const OPTIONS = ['email', 'telephone', 'pager', 'carrier pigeon']

export default class CheckboxExample extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, selected) {
    this.setState({ selected })
  }

  render () {
    return (
      <Field variant='blocked'>
        <label>How would you like to be contacted?</label>
        <div className='us-field-toggle'>
          {OPTIONS.map((option, i) => (
            <Radio
              key={option}
              name='radio'
              disabled={i === 3}
              value={option}
              checked={this.state.selected === option}
              onChange={this.handleChange}
              children={option} />
          ))}
        </div>
      </Field>
    )
  }
}
