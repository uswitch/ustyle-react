import React, {PureComponent} from 'react';
import Field from '../Field/index';
import Checkbox from './index';

export default class CheckboxExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Field variant="blocked">
        <label>How would you like to be contacted?</label>
        <div className="us-field-toggle">
          <Checkbox disabled name="Email" onChange={this.handleChange}>Email</Checkbox>
          <Checkbox name="Telephone" onChange={this.handleChange}>Telephone</Checkbox>
          <Checkbox name="Pager" onChange={this.handleChange}>Pager</Checkbox>
        </div>
      </Field>
    );
  }
};
