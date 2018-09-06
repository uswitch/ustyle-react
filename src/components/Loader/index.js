import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class Loader extends PureComponent {
  render () {
    return (
      <div className='us-loader us-loader--loading us-loader--centered'>
        <div className='us-loader__inner'>
          <div className='us-loader__spinner' />
          <div className='us-loader__text'>{this.props.text}</div>
          {this.props.children}
        </div>
        <div className='us-loader__overlay' />
      </div>
    )
  }
}

Loader.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
}
