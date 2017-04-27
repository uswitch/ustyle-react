import React, {PureComponent} from 'react';
import {Toggle, ToggleYesNo} from './index';

const items = [{
  disabled: false,
  text: 'Yes, I like cheese',
  value: 1
}, {
  disabled: false,
  text: 'No, I hate cheese',
  value: false
}, {
  disabled: true,
  text: 'Cheese is not real',
  value: 'fake'
}];

export default class ToggleExample extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      toggleValue: true,
      yesNoValue: true
    };
  }
  onToggleChangeHandler (e, { value }) {
    this.setState({ toggleValue: value });
  }
  onYesNoChangehandler (e, { value }) {
    this.setState({ yesNoValue: value });
  }
  get jsonState () {
    return JSON.stringify(this.state);
  }
  render () {
    return (
      <div>
        <pre>{this.jsonState}</pre>

        <Toggle
          name='toggleValue'
          value={this.state.toggleValue}
          items={items}
          onChange={this.onToggleChangeHandler.bind(this)} />

        <ToggleYesNo
          name='yesNoExample'
          value={this.state.yesNoValue}
          onChange={this.onYesNoChangehandler.bind(this)} />
      </div>
    );
  }
}
