import React, {PureComponent} from 'react';
import Toggle from './index';

const items = [{
  disabled: false,
  text: 'Yes, I like cheese',
  value: 'yes'
}, {
  disabled: false,
  text: 'No, I hate cheese',
  value: 'no'
}, {
  disabled: true,
  text: 'Cheese is not real',
  value: 'fake'
}];

export default class ToggleExample extends PureComponent {
  constructor (props) {
    super(props);
    this.state = { myValue: 'no' };
  }
  onChangeHandler (e, item) {
    console.log(item);
    this.setState({ myValue: item.value });
  }
  get jsonState () {
    return JSON.stringify(this.state);
  }
  render () {
    return (
      <div>
        <pre>{this.jsonState}</pre>
        <Toggle
          name='myValue'
          value={this.state.myValue}
          items={items}
          onChange={this.onChangeHandler.bind(this)} />
      </div>
    );
  }
}
