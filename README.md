# ustyle-react

A collection of React components implementing the uSwitch style guide, (uStyle)[https://ustyle.guide/].

## Components

Below are a list of components, with some guidance of how to use them.

### Button

Example:

```js
import Button from 'ustyle-react/Button';

<Button size='large' variant='primary' blocked />
```

Options:

- `variant` [string] - options: primary, action, secondary, hero, reversed
- `size` [string] - options: large, small
- `href` [string] - if set, will return an anchor tag instead of a button
- `size` [boolean]
- `blocked` [boolean]
- `link` [boolean]
- `stronger` [boolean]
- `onClick` [function] - called when the button is clicked
