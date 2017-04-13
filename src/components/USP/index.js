import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const COLORS = [
  'blue',
  'orange',
  'purple',
  'yellow',
  'typecyan',
  'green',
  'navy',
  'cyan',
  'typegrey',
  'red'
];

export default class USP extends PureComponent {
  get className () {
    const {color} = this.props;
    return cx({
      'us-usp': true,
      [`us-usp--${color}`]: color
    });
  }
  get basicUSP () {
    const {text} = this.props;
    return <div className={this.className}>{text}</div>;
  }
  get annotatedUSP () {
    const {text, annotation} = this.props;
    return (
      <div className='us-usp us-usp--annotated'>
        <div className={this.className}>{text}</div>
        <span>{annotation}</span>
      </div>
    );
  }
  render () {
    return this.props.annotation ? this.annotatedUSP : this.basicUSP;
  }
}

USP.propTypes = {
  text: PropTypes.node.isRequired,
  annotation: PropTypes.string,
  color: PropTypes.oneOf(COLORS)
};
