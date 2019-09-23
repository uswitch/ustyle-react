import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../Button'
import {addClass, removeClass, hasClass} from '../../utils/class-helpers'

const VARIANTS = ['left', 'right', 'modal']
const OVERLAY_BODY_CLASS = 'us-overlay--open'

export default class Overlay extends PureComponent {
  constructor (props, context) {
    super(props, context)
    this.state = {
      visibility: props.isOpen ? 'visible' : 'closed'
    }
  }
  disableScroll () {
    addClass(document.querySelector('html'), OVERLAY_BODY_CLASS)
    addClass(document.body, OVERLAY_BODY_CLASS)
  }
  enableScroll () {
    removeClass(document.querySelector('html'), OVERLAY_BODY_CLASS)
    removeClass(document.body, OVERLAY_BODY_CLASS)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen === this.props.isOpen) return
    return nextProps.isOpen ? this.openOverlay() : this.closeOverlay()
  }
  get scrollingElement () {
    return document.body
  }
  openOverlay () {
    this.setState({
      visibility: 'visible',
      scrollTop: this.scrollingElement.scrollTop
    })

    setTimeout(() => {
      this.disableScroll()
    }, 300)
  }
  finishClose (e) {
    this.setState((state) => ({
      visibility: 'closed'
    }))
  }
  closeOverlay (e) {
    this.setState({
      visibility: 'closing'
    })
    // using uStyle's overlay, which means we need some class dancing here
    if (hasClass(document.body, OVERLAY_BODY_CLASS)) {
      this.enableScroll()
      setTimeout(() => {
        this.scrollingElement.scrollTop = this.state.scrollTop
      }, 100)
    }
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
        <div
          ref={this.props.parentRef}
          className={this.overlayParentClassName}
        >
          <div className={this.overlayClassName}>
            <div className='us-overlay__container'>
              <div className='us-overlay__header'>
                <div className='us-overlay__title'>
                  {this.props.title}
                </div>
                <div className='us-overlay__close'>
                  <Button size='small'
                    className={this.props.closeClassName}
                    variant='reversed'
                    onClick={this.props.onClose.bind(this)}
                    children={this.props.closeText} />
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
  children: PropTypes.node,
  closeClassName: PropTypes.string,
  closeText: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  parentRef: PropTypes.func,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(VARIANTS)
}

Overlay.defaultProps = {
  isOpen: false,
  variant: 'modal',
  closeText: 'Close'
}
