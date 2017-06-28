import React from 'react'
import ReactDOM from 'react-dom'
import USP from '../src/components/USP/example'
import Button from '../src/components/Button/example'
import Breadcrumbs from '../src/components/Breadcrumbs/example'
import ProgressNavigation from '../src/components/ProgressNavigation/example'
import LoaderContainer from '../src/components/LoaderContainer/example'
import DelayedLoader from '../src/components/DelayedLoader/example'
import Icon from '../src/components/Icon/example'
import ValidationError from '../src/components/ValidationError/example'
import ValidationMessage from '../src/components/ValidationMessage/example'
import Select from '../src/components/Select/example'
import Toggle from '../src/components/Toggle/example'
import Overlay from '../src/components/Overlay/example'
import ToggleYesNo from '../src/components/ToggleYesNo/example'
import InputGroup from '../src/components/InputGroup/example'
import Checkbox from '../src/components/Checkbox/example'
import Radio from '../src/components/Radio/example'
import Tabs from '../src/components/Tabs/example'
import Input from '../src/components/Input/example'
import TextArea from '../src/components/TextArea/example'

ReactDOM.render(
  <div className='us-container'>
    <h2>Progress Navigation</h2><ProgressNavigation /><hr />
    <h2>Breadcrumbs</h2><Breadcrumbs /><hr />
    <h2>USPs</h2><USP /><hr />
    <h2>Buttons</h2><Button /><hr />
    <h2>LoaderContainer</h2><LoaderContainer /><hr />
    <h2>DelayedLoader</h2><DelayedLoader /><hr />
    <h2>Icons</h2><Icon /><hr />
    <h2>Overlay</h2><Overlay />
    <h2>Validation Error</h2><ValidationError /><hr />
    <h2>Validation Message</h2><ValidationMessage /><hr />
    <h2>Select</h2><Select /><hr />
    <h2>Toggle</h2><Toggle /><hr />
    <h2>ToggleYesNo</h2><ToggleYesNo /><hr />
    <h2>InputGroup</h2><InputGroup /><hr />
    <h2>Tabs</h2><Tabs /><hr />
    <h2>Input</h2><Input /><hr />
    <h2>TextArea</h2><TextArea /><hr />
    <h2>Checkbox</h2><Checkbox /><hr />
    <h2>Radio</h2><Radio /><hr />
    <h2>Tabs</h2><Tabs />
  </div>
, document.getElementById('main'))
