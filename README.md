# ustyle-react

A collection of React components implementing the uSwitch style guide, [uStyle](https://ustyle.guide/).

## Installation

First, install the package:

```bash
yarn add uswitch/ustyle-react
# or `npm install uswitch/ustyle-react`, if you're feeling retro
```

Congratulations! You can now import `ustyle-react` components like so:

```js
import {Button} from 'ustyle-react';

// Do things with your button here...
```

## Development

First, clone the project and install the dependencies:

```bash
git clone git@github.com:uswitch/ustyle-react.git
cd ustyle-react && yarn install # or `npm install`
```

To start the development server (on port 9000) run:

```bash
npm start
```

Since the project is written in ES2015+, the `src` code will need to built when you commit.
Luckily, we have a pre-commit hook that builds the code for you before every commit!

To run the build step manually:

```bash
npm run build
```

## Components

Below are a list of components, with some guidance of how to use them.

### Button [→](https://ustyle.guide/pattern-library/components.html#buttons)

Example:

```js
import {Button} from 'ustyle-react';

<Button size='large' variant='primary' blocked />
```

Props:

- `variant` [string] - options: primary, action, secondary, hero, reversed
- `size` [string] - options: large, small
- `href` [string] - if set, will return an anchor tag instead of a button
- `size` [boolean]
- `blocked` [boolean]
- `link` [boolean]
- `stronger` [boolean]
- `onClick` [function] - called when the button is clicked


### Breadcrumbs [→](https://ustyle.guide/pattern-library/components.html#breadcrumbs)

Example:

```js
import {Breadcrumbs} from 'ustyle-react';

const items = [{
  href: '/',
  text: 'uSwitch.com'
}, {
  href: null, // NOTE: optional; not used
  text: 'Statutory credit reports'
}];

const onClick = (e) => e.preventDefault();

<Breadcrumbs items={items} onClick={onClick} />
```

Props:

- `items` [array:objects]
  - `href` [string]
  - `text` [string/node]
- `onClick` [function] - called when a breadcrumb is clicked


### ProgressNavigation [→](https://ustyle.guide/pattern-library/components.html#progress_navigation)

Example:

```js
import {ProgressNavigation} from 'ustyle-react';

const items = [{
  href: '/journey/step-1',
  text: 'Step 1'
}, {
  href: '/journey/step-2', // NOTE: optional; not used
  text: 'Step 2',
  current: true
}, {
  href: '/journey/step-3', // NOTE: optional; not used
  text: 'Step 3'
}];

const onClick = (e, item) => e.preventDefault();

<ProgressNavigation items={items} onClick={onClick} />
```

Props:

- `items` [array:objects]
  - `href` [string] - only required for completed steps
  - `text` [string/node]
  - `current` [boolean] - the step that the user is currently on
- `onClick` [function] - called when a navigation link is clicked

### USP [→](https://ustyle.guide/pattern-library/components.html#usps)

Example:

```js
import {USP} from 'ustyle-react';

<USP color='red' text='Example USP' annotation='More info goes here...' />
```

Props:

- `text` [string:required] - the main USP text
- `annotation` [string]
- `color` [string] - options: blue, orange, purple, yellow, typecyan, green, navy, cyan, typegrey, red

### Loader [→](https://ustyle.guide/pattern-library/components.html#loader)

Example:

```js
import {Loader} from 'ustyle-react';

let isLoading = true;

setTimeout(() => isLoading = false, 10000);

<div>{ isLoading ? <Loader text='Loading...' /> : null }</div>
```

### LoaderContainer [→](https://ustyle.guide/pattern-library/components.html#loader)

Example:

```js
import {LoaderContainer} from 'ustyle-react';

let isLoading = true;

setTimeout(() => isLoading = false, 10000);

<LoaderContainer text='Loading...' isLoading={isLoading}>
  <ul className='us-list'>
    <li><a href='#'>List item 1</a></li>
    <li><a href='#'>List item 2</a></li>
    <li><a href='#'>List item 3</a></li>
    <li><a href='#'>List item 4</a></li>
  </ul>
</LoaderContainer>
```

Props:

- `text` [string] - displayed under the loading spinner
- `isLoading` [boolean]
- `children` [nodes]

### Icons [→](https://ustyle.guide/design/icons.html)

Example:

```js
import {Icon} from 'ustyle-react';

<Icon name='google' color='typecyan' size='large' />
```

Props:

- `name` [string] - displayed under the loading spinner
- `color` [string] - options: white, typegrey, inputgrey, typecyan, custom
- `size` [string] options: small, medium, large
- `sizeTablet` [string] - maps to `.us-icon--{sizeTablet}--sm-tablet`
- `sizeMobile` [string] - maps to `.us-icon--{sizeMobile}--mobile`
- `noText` [boolean]
- `iconPath` [string] - default `/icons.svg`, the path where your icons are hosted

Notes:

- To set a global icon path, you can set `process.env.ICON_PATH = /images/icons.svg`;

### ValidationError [→](https://ustyle.guide/pattern-library/forms.html#validation_messages)

Example:

```js
import {ValidationError} from 'ustyle-react';

<ValidationError>Something went wrong!</ValidationError>
```

Props:

- `children` [node] - error message to display

Notes:

- Alias for `<ValidationMessage variant='error' children={children}/>`

### ValidationMessage [→](https://ustyle.guide/pattern-library/forms.html#validation_messages)

Example:

```js
import {ValidationMessage} from 'ustyle-react';

let valid = true;
let message = 'You have been subscribe';

<ValidationMessage variant={ valid ? 'success' : 'error'} children={message} />
```

Props:

- `variant` [string] - options: error, success
- `children` [node] - error message to display

Notes:

- Alias for `<ValidationMessage variant='error' children={children}/>`

### ValidationMessage [→](https://ustyle.guide/pattern-library/forms.html#validation_messages)

Example:

```js
import {ValidationMessage} from 'ustyle-react';

let valid = true;
let message = 'You have been subscribe';

<ValidationMessage variant={ valid ? 'success' : 'error'} children={message} />
```

Props:

- `variant` [string] - options: error, success
- `children` [node] - error message to display

Notes:

- Alias for `<ValidationMessage variant='error' children={children}/>`

### Toggle [→](https://ustyle.guide/pattern-library/forms.html#toggle)

Example:
```js
import {Toggle} from 'ustyle-react';

const items = [
  {
    text: 'Red',
    value: 'red'
  },
  {
    text: 'White',
    value: 'white'
  },
  {
    text: 'Rosé',
    value: 'rose'
  }
];

const onChange = (e, item) => console.log(item);

<Toggle items={items} onChange={onChange} name='toggle' />
```

Props:

- `items` [array:objects]
  - `text` [string/node]
  - `value` [string]
  - `disabled` [bool]
- `value` [string] - the current value for the toggle component
- `name` [string]
- `onChange` [function]

### ToggleYesNo [→](https://ustyle.guide/pattern-library/forms.html#toggleyesno)

Example:
```js
import {ToggleYesNo} from 'ustyle-react';

const onChange = (e, item) => console.log(item);

<ToggleYesNo value={true} onChange={onChange} name='toggle-yes-no' />
```

Props:

- `value` [string] - the current value for the toggle component
- `name` [string]
- `onChange` [function]

### Select [→](https://ustyle.guide/pattern-library/forms.html#selects)


Example:
```js
import {Select} from 'ustyle-react';

const items = [{
  text: 'Aye!',
  value: 'yes'
}, {
  text: 'Nay...',
  value: 'no'
}];

const onChange = (e, item) => console.log(item);

<Select items={items} onChange={onChange} name='select' />
```

Props:

- `items` [array:objects]
  - `text` [string/node]
  - `value` [string]
- `value` [string] the current value of the select component
- `name` [string]
- `variant` [string]
- `disabled` [bool]
- `blocked` [boolean]
- `onChange` [function]

### InputGroup [→](https://ustyle.guide/pattern-library/forms.html#input_group)

Example:
```js
import {InputGroup} from 'ustyle-react';

<InputGroup text="kwh" position="right">
  <input className="us-form-input" type="number" id="energy" placeholder="0" />
</InputGroup>
```

Props:

- `text` [string/node]
- `icon` [string] replaces text
- `position` [string] options: left, right
- `disabled` [bool]
- `blocked` [boolean]

### Tabs [→](https://ustyle.guide/pattern-library/javascript.html#tabs)

Example:
```js
import {Tabs} from 'ustyle-react';

const items = [{
  id: 'tab1', title: 'Tab 1', body: 'test'
}, {
  id: 'tab2', title: 'Tab 2', body: 'test', active: true
}, {
  id: 'tab3', title: 'Tab 3', body: 'test'
}];

const onClick = (e, item) => {
  // set `active: false` for all tabs
  // set `active: true` for clicked tab
};

<Tabs onClick={onClick} items={items} />
```

Props:

- `items` [array:objects]
  - `id` [string]
  - `href` [string]
  - `title` [string]
  - `body` [string/node]
  - `active` [bool]
- `onClick` [function]
