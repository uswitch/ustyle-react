# ustyle-react

A collection of React components implementing the uSwitch style guide, [uStyle](https://ustyle.guide/).

## Usage (ES2015+)

First, install the package:

```
yarn add uswitch/ustyle-react
```

Then, in your `webpack.config.js`, add the following loader, making sure it's called *before* any other loaders:

```js
// more config...
loaders: [
  {
    test: /node_modules\/ustyle-react\/(.*)\.js$/,
    loader: 'babel-loader',
    query: {
      presets: ['react', 'es2015', 'stage-2']
    }
  },
  // other loaders go here
]
// even more config...
```

Congratulations! You can now import `ustyle-react` components like so:

```js
import {Button} from 'ustyle-react';
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

const onClick = (e) => e.preventDefault();

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
