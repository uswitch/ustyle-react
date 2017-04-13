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

const onClick = (e) => e.preventDefault();

<USP color='red' text='Example USP' annotation='More info goes here...' onClick={onClick} />
```

Props:

- `text` [string:required] - the main USP text
- `annotation` [string]
- `color` [string] - options: blue, orange, purple, yellow, typecyan, green, navy, cyan, typegrey, red
- `onClick` [function] - called when the USP is clicked

### Loader [→](https://ustyle.guide/pattern-library/components.html#loader)

Example:

```js
import {Loader} from 'ustyle-react';

let isLoading = true;

setTimeout(() => isLoading = false, 10000);

<Loader text='Loading...' isLoading={isLoading}>
  <ul className='us-list'>
    <li><a href='#'>List item 1</a></li>
    <li><a href='#'>List item 2</a></li>
    <li><a href='#'>List item 3</a></li>
    <li><a href='#'>List item 4</a></li>
  </ul>
</Loader>
```

Props:

- `text` [string] - displayed under the loading spinner
- `isLoading` [boolean]
- `children` [nodes]

### Loader [→](https://ustyle.guide/design/icons.html)

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
