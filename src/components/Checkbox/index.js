import React, {PureComponent} from 'react'
import CheckableInput from '../CheckableInput'
import omit from '../../utils/omit'

export default class Checkbox extends PureComponent {
  render () {
    const props = omit(this.props, 'type')
    return <CheckableInput {...props} type='checkbox' />
  }
}
