import React, {PureComponent} from 'react';
import Select from './index';

const items = [{
  text: 'Yes, I like cheese',
  value: 'yes'
}, {
  text: 'No, I hate cheese',
  value: 'no'
}, {
  text: 'Cheese is not real',
  value: 'fake'
}];

export default class SelectExample extends PureComponent {
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
        <Select
          name='myValue'
          value={this.state.myValue}
          items={items}
          onChange={this.onChangeHandler.bind(this)} />
        <Select
          name='myValue'
          value={this.state.myValue}
          items={items}
          disabled />
        <Select
          blocked
          variant={this.state.myValue === 'yes' ? 'success' : 'error'}
          size={2}
          name='myValue'
          value={this.state.myValue}
          items={items}
          onChange={this.onChangeHandler.bind(this)} />
      </div>
    );
  }
}
