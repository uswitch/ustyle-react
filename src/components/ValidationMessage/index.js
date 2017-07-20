import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

const VARIANTS = ['error', 'success']

export default class ValidationMessage extends PureComponent {
  get className () {
    const {variant} = this.props
    return cx({
      'us-validation': true,
      [`us-validation--${variant}`]: variant
    })
  }
  get cleanProps () {
    return omit(
      this.props,
      'className',
      'children', // pass this inside message element
      'variant' // only used for className
    )
  }
  render () {
    return (
      <div className={this.className} {...this.cleanProps}>
        <div className='us-validation__icon' />
        <div className='us-validation__message'>{this.props.children}</div>
      </div>
    )
  }
}

ValidationMessage.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  children: PropTypes.node.isRequired
}

ValidationMessage.defaultProps = {
  variant: 'error'
}
