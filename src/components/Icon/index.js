import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const ICON_PATH = process.env.ICON_PATH || (typeof(window) !== 'undefined' && window['ICON_PATH']) || '/icons.svg'
const SIZES = ['small', 'medium', 'large']
const COLORS = ['white', 'typegrey', 'inputgrey', 'typecyan', 'custom']
const CUSTOM_ICONS = [
  'cross',
  'facebook',
  'facebook-brand',
  'google',
  'google-brand',
  'renewable',
  'star-half',
  'star',
  'starline-half',
  'starline',
  'tick',
  'twitter',
  'twitter-brand',
  'uswitch'
]

export default class Icon extends PureComponent {
  get realColor () {
    const { name, color } = this.props
    if (color !== 'custom') return color
    return CUSTOM_ICONS.includes(name) ? name : color
  }
  get className () {
    const { size, sizeTablet, sizeMobile, noText } = this.props
    return cx({
      'us-icon': true,
      [`us-icon--${size}`]: size,
      [`us-icon--${sizeTablet}--sm-tablet`]: sizeTablet,
      [`us-icon--${sizeMobile}--mobile`]: sizeMobile,
      [`us-icon--${this.realColor}`]: this.realColor,
      'us-icon--notext': noText
    })
  }
  get xlinkHref () {
    return `${this.props.iconPath}#icon-${this.props.name}`
  }
  render () {
    return (
      <svg
        role='presentation'
        className={this.className}>
        <use xlinkHref={this.xlinkHref} />
      </svg>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(SIZES).isRequired,
  sizeTablet: PropTypes.oneOf(SIZES),
  sizeMobile: PropTypes.oneOf(SIZES),
  color: PropTypes.oneOf(COLORS),
  noText: PropTypes.bool.isRequired,
  iconPath: PropTypes.string.isRequired
}

Icon.defaultProps = {
  size: 'medium',
  color: 'custom',
  noText: false,
  iconPath: ICON_PATH
}
