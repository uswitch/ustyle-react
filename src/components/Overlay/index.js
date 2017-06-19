import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import {addClass, removeClass, hasClass} from '../../utils/class-helpers'

const VARIANTS = ['left', 'right', 'modal']

export default class Overlay extends PureComponent {
  constructor (props, context) {
    super(props, context)
    this.state = {
      visibility: 'closed'
    }
  }
  disableScroll () {
    addClass(document.querySelector('html'), 'noscroll')
    addClass(document.body, 'noscroll')
  }
  enableScroll () {
    removeClass(document.querySelector('html'), 'noscroll')
    removeClass(document.body, 'noscroll')
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen === this.props.isOpen) return
    return nextProps.isOpen ? this.openOverlay() : this.closeOverlay()
  }
  openOverlay () {
    this.setState({
      visibility: 'visible',
      scrollTop: document.body.scrollTop
    })
    this.disableScroll()
  }
  finishClose (e) {
    this.setState((state) => ({
      visibility: 'closed'
    }))
    // using uStyle's overlay, which means we need some class dancing here
    if (hasClass(document.body, 'noscroll')) {
      this.enableScroll()
      setTimeout(() => {
        document.body.scrollTop = this.state.scrollTop
      }, 100)
    }
  }
  closeOverlay (e) {
    this.setState({
      visibility: 'closing'
    })
    setTimeout(this.finishClose.bind(this, e), 500)
  }
  get backdropHTML () {
    const {visibility} = this.state
    if (!visibility === 'visible') return null
    return (
      <div className={cx({
        'us-backdrop': true,
        'us-backdrop--animated': true,
        'us-backdrop--active': visibility === 'visible',
        'us-backdrop--visible': ['visible', 'closing'].indexOf(visibility) > -1
      })} onClick={this.props.onClose.bind(this)} />
    )
  }
  get overlayParentClassName () {
    const {visibility} = this.state
    if (!visibility === 'visible') return null
    return cx({
      'us-overlay-parent': true,
      'us-overlay-parent--active': visibility === 'visible',
      'us-overlay-parent--visible': ['visible', 'closing'].indexOf(visibility) > -1
    })
  }
  get overlayClassName () {
    const {variant} = this.props
    return cx({
      'us-overlay': true,
      'us-overlay--right': variant === 'right',
      'us-overlay--modal': variant === 'modal'
    })
  }
  render () {
    return (
      <div>
        <div className={this.overlayParentClassName}>
          <div className={this.overlayClassName}>
            <div className='us-overlay__container'>
              <div className='us-overlay__header'>
                <div className='us-overlay__title'>
                  {this.props.title}
                </div>
                <div className='us-overlay__close'>
                  <Button size='small'
                    variant='reversed'
                    onClick={this.props.onClose.bind(this)}
                    children='Close' />
                </div>
              </div>
              <div className='us-overlay__body'>
                {this.props.children}
              </div>
            </div>
          </div>
          {this.backdropHTML}
        </div>
      </div>
    )
  }
}

Overlay.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(VARIANTS)
}

Overlay.defaultProps = {
  isOpen: false,
  variant: 'modal'
}
