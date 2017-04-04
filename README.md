# ustyle-react

A collection of React components implementing the uSwitch style guide, (uStyle)[https://ustyle.guide/].

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
