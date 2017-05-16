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
    const {text, children} = this.props;
    return <div className={this.className}>{text || children}</div>;
  }
  get annotatedUSP () {
    const {text, children, annotation} = this.props;
    return (
      <div className='us-usp us-usp--annotated'>
        <div className={this.className}>{text || children}</div>
        <span>{annotation}</span>
      </div>
    );
  }
  render () {
    return this.props.annotation ? this.annotatedUSP : this.basicUSP;
  }
}

USP.propTypes = {
  children: PropTypes.node,
  annotation: PropTypes.string,
  color: PropTypes.oneOf(COLORS)
};
