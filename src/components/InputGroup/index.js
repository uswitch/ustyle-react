import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import cx from 'classnames'

const POSITIONS = ['left', 'right']

export default class InputGroup extends PureComponent {
  get boxContents () {
    if (this.props.icon) {
      return <Icon name={this.props.icon} color='inputgrey' size='small' />
    } else {
      return this.props.text
    }
  }
  get box () {
    return <span className='us-input-group__box'>{this.boxContents}</span>
  }
  get leftBox () {
    if (this.props.position === 'left') {
      return this.box
    }
  }
  get rightBox () {
    if (this.props.position === 'right') {
      return this.box
    }
  }
  get className () {
    return cx({
      'us-input-group': true,
      'us-input-group--disabled': this.props.disabled,
      'us-input-group--blocked': this.props.blocked
    })
  }
  render () {
    return (
      <div className={this.className}>
        { this.leftBox }
        { this.props.children }
        { this.rightBox }
      </div>
    )
  }
}

InputGroup.propTypes = {
  text: PropTypes.node,
  icon: PropTypes.string,
  position: PropTypes.oneOf(POSITIONS),
  children: PropTypes.element
}

InputGroup.defaultProps = {
  position: 'left'
}
