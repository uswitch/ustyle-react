import React, {PureComponent} from 'react';
import Field from '../Field/index';
import Radio from './index';

export default class CheckboxExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {radiovalue: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      radiovalue: value
    });
  }

  render() {
    return (
      <Field variant="blocked">
        <label>Do you have a different billing address?</label>
        <div className="us-field-toggle">
          <Radio disabled name="option" onChange={this.handleChange}>Yes</Radio>
          <Radio name="option" onChange={this.handleChange}>No</Radio>
          <Radio name="option" onChange={this.handleChange}>Maybe</Radio>
        </div>
      </Field>
    );
  }
}
