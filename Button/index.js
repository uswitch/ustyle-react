import React from 'react';

const VARIANTS = ['primary', 'action', 'secondary', 'hero', 'reversed'];
const SIZES = ['large', 'small']; // NOTE: should we have medium as default?
const noop = () => {};

function validateVariant (variant) {
  if (!variant || VARIANTS.includes(variant)) return;
  throw new Error(
    `Invalid button variant: ${variant}. Must be one of: ${VARIANTS.join(', ')}`
  );
}

function validateSize (size) {
  if (!size || SIZES.includes(size)) return;
  throw new Error(
    `Invalid button size: ${size}. Must be one of: ${SIZES.join(', ')}`
  );
}

function getClassName (props) {
  const modifiers = [];
  if (props.variant) modifiers.push(props.variant);
  if (props.size) modifiers.push(props.size);
  if (props.blocked) modifiers.push('blocked');
  if (props.link) modifiers.push('link');
  if (props.stronger) modifiers.push('stronger');
  if (props.href && props.disabled) modifiers.push('disabled');
  return 'us-btn ' + modifiers.map(m => `us-btn--${m}`);
}

function Button (props) {
  const { size, variant, children, href, onClick = noop } = props;
  console.log('--> init button');
  validateVariant(variant);
  validateSize(size);
  const className = getClassName(props);
  const childProps = { className, onClick, children };
  if (href) return <a href={href} role='button' {...childProps} />;
  return <button {...childProps} />;
}

export default Button;
