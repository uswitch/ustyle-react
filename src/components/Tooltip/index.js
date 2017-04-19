import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const POSITIONS = ['top', 'bottom', 'left', 'right'];
const SIZES = ['small'];

export default class Tooltip extends PureComponent {
  constructor (props) {
    super(props);
    this.state = { active: false };
  }
  toggleActive () {
    this.setState({ active: !this.state.active });
  }
  get className () {
    const { position, size } = this.props;
    const { active } = this.state;
    return cx({
      'us-tooltip': true,
      [`us-tooltip--active`]: active,
      [`us-tooltip--${position}`]: position,
      [`us-tooltip--${size}`]: size
    });
  }
  render () {
    const { text, children } = this.props;
    return (
      <div className={this.className} style={{position: 'relative'}}>
        {children}
        <div className='us-tooltip__wrapper'>
          <div
            className='us-tooltip__icon'
            onClick={this.toggleActive.bind(this)} />
          <div className='us-tooltip__note'>
            <div className='us-tooltip__arrow' />
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.node.isRequired,
  position: PropTypes.oneOf(POSITIONS),
  size: PropTypes.oneOf(SIZES),
  note: PropTypes.bool
};

Tooltip.defaultProps = {
  note: false
};
