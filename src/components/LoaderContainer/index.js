import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

export default class LoaderContainer extends PureComponent {
  render () {
    const {isLoading, text, children} = this.props;
    return (
      <div className='us-loader__container'>
        {isLoading ? <Loader text={text} /> : null}
        {children}
      </div>
    );
  }
}

LoaderContainer.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node
};

LoaderContainer.defaultValues = {
  isLoading: true
};
