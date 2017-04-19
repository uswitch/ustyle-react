import React, {Component} from 'react';
import Overlay from './index';
import Button from '../Button';
import Toggle from '../Toggle';

const OVERLAY_POSITIONS = ['left', 'modal', 'right'];
const TOGGLE_ITEMS = OVERLAY_POSITIONS.map((v) => ({ text: v, value: v }));

export default class OverlayExample extends Component {
  constructor (props) {
    super(props);
    this.state = { isOpen: false, position: 'left' };
  }
  openOverlay () {
    this.setState({
      isOpen: true,
      children: <p>The model is open: <b>{this.state.position}</b></p>
    });
  }
  closeOverlay () {
    this.setState({ isOpen: false });
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({ isLoading: !this.state.isLoading });
    }, 1000);
  }
  setPosition (position) {
    console.log(position);
    this.setState(Object.assign({}, this.state, { position }));
  }
  onToggleClick (e, item) {
    this.setPosition(item.value);
  }
  get toggleButtons () {
    return (
      <Toggle
        items={TOGGLE_ITEMS}
        value={this.state.position}
        onChange={this.onToggleClick.bind(this)} />
    );
  }
  render () {
    return (
      <div>
        <label htmlFor='overlay_position'>Overlay position:</label>
        <br />
        <Toggle
          name='overlay_position'
          items={TOGGLE_ITEMS}
          value={this.state.position}
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
