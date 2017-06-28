import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

const VARIANTS = ['primary', 'action', 'secondary', 'hero', 'reversed', 'custom']
const SIZES = ['large', 'small'] // NOTE: should we have medium as default?

export default class Button extends PureComponent {
  get className () {
    return cx(this.props.className, {
      'us-btn': true,
      [`us-btn--${this.props.variant}`]: this.props.variant,
      [`us-btn--${this.props.size}`]: this.props.size,
      'us-btn--blocked': this.props.blocked,
      'us-btn--link': this.props.link,
      'us-btn--stronger': this.props.stronger,
      'us-btn--disabled': this.props.href && this.props.disabled
    })
  }
  get cleanProps () {
    return omit(
      this.props,
      'className',
      'variant',
      'size',
      'blocked',
      'link',
      'stronger',
      'href', // not needed for <button> tag
      'disabled' // no need to add "disabled" to <a> tag
    )
  }
  render () {
    const { href, disabled } = this.props
    const props = { ...this.cleanProps, className: this.className }
    if (href) return <a href={href} role='button' {...props} />
    return <button disabled={disabled} {...props} />
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  size: PropTypes.oneOf(SIZES),
  blocked: PropTypes.bool.isRequired,
  link: PropTypes.bool.isRequired,
  stronger: PropTypes.bool.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  blocked: false,
  link: false,
  stronger: false,
  onClick: () => {}
}
