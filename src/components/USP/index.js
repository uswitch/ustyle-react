import React from 'react';

const COLORS = [
  'blue',
  'orange',
  'purple',
  'yellow',
  'typecyan',
  'green',
  'navy',
  'cyan',
  'typegrey',
  'red'
];
const noop = () => {};

function validateColor (color) {
  if (!color || COLORS.includes(color)) return;
  throw new Error(
    `Invalid USP color: ${color}. Must be one of: ${COLORS.join(', ')}`
  );
}

function getClassName (color) {
  return ['us-usp'].concat(color ? `us-usp--${color}` : '').join(' ');
}

function USP ({ color, text, annotation, onClick = noop }) {
  validateColor(color);
  if (!annotation) {
    return <div className={getClassName(color)} onClick={onClick}>{text}</div>;
  } else {
    return (
      <div className='us-usp us-usp--annotated' onClick={onClick}>
        <div className={getClassName(color)}>{text}</div>
        <span>{annotation}</span>
      </div>
    );
  }
}

export default USP;
