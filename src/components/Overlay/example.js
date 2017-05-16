import React, {Component} from 'react';
import Overlay from './index';
import Button from '../Button';
import Toggle from '../Toggle';

const OVERLAY_POSITIONS = ['left', 'modal', 'right'];
const TOGGLE_ITEMS = OVERLAY_POSITIONS.map((v) => ({ text: v, value: v }));

export default class OverlayExample extends Component {
  constructor (props) {
    super(props);
    this.state = { isOpen: false, variant: 'left' };
  }
  openOverlay () {
    this.setState({
      isOpen: true,
      children: <p>The model is open: <b>{this.state.variant}</b></p>
    });
  }
  closeOverlay () {
    this.setState({ isOpen: false });
  }
  setVariant (variant) {
    console.log(variant);
    this.setState(Object.assign({}, this.state, { variant }));
  }
  onToggleClick (e, item) {
    this.setVariant(item.value);
  }
  get toggleButtons () {
    return (
      <Toggle
        items={TOGGLE_ITEMS}
        value={this.state.variant}
        onChange={this.onToggleClick.bind(this)} />
    );
  }
  render () {
    return (
      <div>
        <label htmlFor='overlay_variant'>Overlay variant:</label>
        <br />
        <Toggle
          name='overlay_variant'
          items={TOGGLE_ITEMS}
          value={this.state.variant}
          onChange={this.onToggleClick.bind(this)} />
        <br />
        <Button onClick={() => this.openOverlay()}>Open Modal</Button>
        <Overlay
          {...this.state}
          onClose={this.closeOverlay.bind(this)}
          title='Overlay Example' />
      </div>
    );
  }
}
