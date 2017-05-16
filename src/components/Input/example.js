import React, {PureComponent} from 'react';
import Input from './index';

export default class InputExample extends PureComponent {
  constructor (props) {
    super(props);
    this.state = { value: '' };
  }
  componentDidMount () {
    this.setState({ value: 'example' });
  }
  updateValue (value) {
    let variant;
    if (value.length === 0) variant = null;
    else variant = (value || '').match('@') ? 'success' : 'error';
    console.log(value, variant);
    this.setState((state) => Object.assign({}, state, { value, variant }), () => {
      console.log('state', this.state);
    });
  }
  render () {
    return (
      <Input {...this.state}
        type="email"
        size="large"
        deferredProps={{id:"email"}}
        placeholder="Email"
        onChange={(e, value) => this.updateValue(value)}
        placeholder="you@example.com" />
    );
  }
}
