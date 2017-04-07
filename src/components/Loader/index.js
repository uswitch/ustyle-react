import React, {PureComponent, PropTypes} from 'react';

export default class Loader extends PureComponent {
  render () {
    const {isLoading, text, children} = this.props;
    if (!isLoading) return children;
    return (
      <div className='us-loader__container'>
        <div className='us-loader us-loader--loading us-loader--centered'>
          <div className='us-loader__inner'>
            <div className='us-loader__spinner' />
            <div className='us-loader__text'>{text}</div>
          </div>
          <div className='us-loader__overlay' />
        </div>
        {children}
      </div>
    );
  }
}

Loader.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node
};

Loader.defaultValues = {
  isLoading: true
};
