import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, ProgressNavigation, Breadcrumbs, USP, Tabs, Icon, Overlay } from '../src/index.js'

import baconipsum from 'baconipsum'
import 'ustyle'

const breadcrumbItems = [
  { href: '', text: 'uSwitch.com' },
  { href: '', text: 'Credit report' },
  { href: '', text: 'Credit reports guides' },
  { href: null, /* NOTE: optional, not used */ text: 'Statutory credit reports' }
]

storiesOf('USPs', module)
  .add('shortened cyan', () => <USP color='typecyan'>Shortended USP</USP>)
  .add('shortened orange', () => <USP color='orange'>Orange USP</USP>)
  .add('annotated red', () => <USP color='red' text='Annotated USP' annotation='More information available about USP goes here' />)

storiesOf('Breadcrumbs', module)
  .add('default view', () => <Breadcrumbs items={breadcrumbItems} onClick={action('breadcrumb-click')} />)

const navigationItems = [
  {href: '', text: 'Current supplier'},
  {href: '', text: 'Usage'},
  {text: 'Results', current: true},
  {text: 'New tariff'},
  {text: 'Apply'}
]

storiesOf('Navigation', module)
  .add('default view', () => <ProgressNavigation items={navigationItems} onClick={action('navigation-click')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')} >Button Element</Button>)
  .add('with primary variant', () => <Button onClick={action('clicked')} variant='primary'>Button Element</Button>)
  .add('with action variant ', () => <Button onClick={action('clicked')} variant='action'>Button Element</Button>)
  .add('with hero variant ', () => <Button onClick={action('clicked')} variant='hero'>Button Element</Button>)
  .add('with large size', () => <Button onClick={action('clicked')} size='large'>Button Element</Button>)
  .add('with small size', () => <Button onClick={action('clicked')} size='small'>Button Element</Button>)
  .add('with blocked', () => <Button onClick={action('clicked')} blocked>Button Element</Button>)
  .add('with stronger', () => <Button onClick={action('clicked')} stronger>Button Element</Button>)
  .add('with disabled', () => <Button onClick={action('clicked')} disabled>Button Element</Button>)
  .add('with reversed variant', () => (
    <div style={{background: '#2e3440', padding: '20px'}}>
      <Button onClick={action('clicked')} variant='reversed'>Button Element</Button>
    </div>
  ))

const tabItems = [
  { id: "tab1", title: "Tab 1", body: <p>{baconipsum(100)}</p> },
  { id: "tab2", title: "Tab 2", body: <p>{baconipsum(50)}</p>, active: true },
  { id: "tab3", title: "Tab 3", body: <p>{baconipsum(75)}</p> }
]

storiesOf("Tabs", module).add("default view", () => (
  <Tabs items={tabItems} onClick={action("tab-change")} />
))

storiesOf("Icon", module)
  .add("with 11branding", () => <Icon name="facebook-brand" />)
  .add("with 12size small", () => <Icon name="cross" size="small" />)
  .add("with 13size large coloured", () => (
    <Icon name="google" color="typecyan" size="large" />
  ))

class OverlayWrapper extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.setShow = this.setShow.bind(this)
  }

  setShow(show) {
    this.setState({ show })
  }

  render() {
    const { show } = this.state
    return (
      <div>
        <Button onClick={() => this.setShow(!show)}>Toggle Overlay</Button>
        <Overlay
          isOpen={show}
          onClose={() => this.setShow(false)}
          title="uSwitch Overlay"
          variant="left"
        >
          <p>Overlay content goes here.</p>
        </Overlay>
      </div>
    )
  }
}

storiesOf("Overlay", module).add("default view", () => <OverlayWrapper />)
