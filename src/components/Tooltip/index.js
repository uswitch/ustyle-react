import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export default class Tooltip extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false
    }

    this.toggle = this.toggle.bind(this)
    this.noteRef = this.noteRef.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.active && this.state.active && this.props.scrollToTooltip) {
      this.note.scrollIntoView(false) /* will scroll to the bottom of the page */
    }
  }

  toggle (e) {
    this.setState((prevState, props) => ({ active: !prevState.active }))
  }

  noteRef (ref) {
    this.note = ref
    return this
  }

  render () {
    const { className, children, position, small, trigger } = this.props
    const { active } = this.state
    const parentClassName = cx({
      'us-tooltip': true,
      [`us-tooltip--${position}`]: !!position,
      'us-tooltip--active': active,
      'us-tooltip--small': small
    }, className)

    return (
      <div className={parentClassName}>
        {children}
        <div className='us-tooltip__wrapper'>
          <div onClick={this.toggle}>
            {trigger}
          </div>

          <div ref={this.noteRef} className='us-tooltip__note'>
            <div className='us-tooltip__arrow' />
            {this.props.tooltipContent}
          </div>
        </div>
      </div>
    )
  }
}

Tooltip.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([ 'left', 'right', 'bottom', 'top' ]),
  small: PropTypes.bool,
  scrollToTooltip: PropTypes.bool
}

Tooltip.defaultProps = {
  small: false,
  scrollToTooltip: false
}
