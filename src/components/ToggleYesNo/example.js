import React, {PureComponent} from 'react';
import ToggleYesNo from './index';

export default class ToggleYesNoExample extends PureComponent {
  constructor (props) {
    super(props);
    this.state = { toggleValue: true };
  }
  onChangeHandler (e, { value }) {
    this.setState({ toggleValue: value });
  }
  get jsonState () {
    return JSON.stringify(this.state);
  }
  render () {
    return (
      <div>
        <pre>{this.jsonState}</pre>

        <ToggleYesNo
          name='toggleYesNoExample'
          value={this.state.toggleValue}
          onChange={this.onChangeHandler.bind(this)} />
      </div>
    );
  }
}
