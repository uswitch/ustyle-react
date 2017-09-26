import React, {Component} from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { position, small, trigger } = this.props;
    const { active } = this.state;
    const parentClassName = cx({
      'us-tooltip': true,
      [`us-tooltip--${position}`]: !!position,
      'us-tooltip--active': active,
      'us-tooltip--small': small,
    }, this.props.className);

    return (
      <div className={parentClassName}>
        {this.props.children}
        <div className="us-tooltip__wrapper">
          <div onClick={this.toggle}>
            {this.props.trigger}
          </div>
          <div className="us-tooltip__note">
            <div className="us-tooltip__arrow" />
            {this.props.tooltipContent}
          </div>
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([ 'left', 'right', 'bottom', 'top' ]),
  small: PropTypes.bool,
};

Tooltip.defaultProps = {
  small: false,
};
