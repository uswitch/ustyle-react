import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class ToggleItem extends PureComponent {
  onChangeHandler (e) {
    this.props.onChange(e, this.props.item);
  }
  render () {
    return (
      <label
        className='us-toggle__label'>
        <input
          type='radio'
          className='us-form-input'
          name={this.props.name}
          value={this.props.item.value}
          checked={this.props.selected}
          onChange={this.onChangeHandler.bind(this)}
          disabled={this.props.item.disabled} />
        <span
          className={cx({
            'us-toggle__btn': true,
            'us-toggle__btn--disabled': this.props.item.disabled
          })}
          children={this.props.item.text} />
      </label>
    );
  }
}

export default class Toggle extends PureComponent {
  render () {
    const { items, onChange, name, value } = this.props;
    return (
      <div className='us-toggle'>
        {items.map((item, i) => (
          <ToggleItem
            key={i}
            name={name}
            selected={item.value === value}
            item={item}
            onChange={onChange} />
        ))}
      </div>
    );
  }
}

Toggle.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  value: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
