import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from '../../utils/omit'

const VARIANTS = ['blocked', 'inline']

export default class Field extends PureComponent {
  get className () {
    const {className, variant} = this.props
    cx(className, {
      'us-field': true,
      [`us-field--${variant}`]: variant
    })
  }
  get cleanProps () {
    return omit(this.props, 'className', 'variant')
  }
  render () {
    return (
      <div className={this.className} {...this.cleanProps} />
    )
  }
}

Field.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  children: PropTypes.node.isRequired
}
