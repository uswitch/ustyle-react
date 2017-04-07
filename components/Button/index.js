import React, {PropTypes, PureComponent} from 'react';
import cx from 'classnames';

const VARIANTS = ['primary', 'action', 'secondary', 'hero', 'reversed'];
const SIZES = ['large', 'small']; // NOTE: should we have medium as default?

export default class Button extends PureComponent {
  getClassName () {
    return cx({
      'us-btn': true,
      [`us-btn--${this.props.variant}`]: this.props.variant,
      [`us-btn--${this.props.size}`]: this.props.size,
      'us-btn--blocked': this.props.blocked,
      'us-btn--link': this.props.link,
      'us-btn--stronger': this.props.stronger,
      'us-btn--disabled': this.props.href && this.props.disabled
    });
  }
  render () {
    const { children, href, onClick, disabled } = this.props;
    const className = this.getClassName();
    const childProps = { className, onClick, children };
    if (href) return <a href={href} role='button' {...childProps} />;
    return <button disabled={disabled} {...childProps} />;
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  size: PropTypes.oneOf(SIZES),
  blocked: PropTypes.bool.isRequired,
  link: PropTypes.bool.isRequired,
  stronger: PropTypes.bool.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  blocked: false,
  link: false,
  stronger: false,
  onClick: () => {}
};
