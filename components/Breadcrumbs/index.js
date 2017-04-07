import React from 'react';

const noop = () => {};

function Breadcrumb ({ text, href, last, onClick }) {
  return (
    <li className='us-crumbs__item'>
      { last
        ? text
        : <a className='us-crumbs__link'
          href={href}
          title={text}
          children={text}
          onClick={onClick} /> }
    </li>
  );
}

export default function Breadcrumbs ({ items = [], onClick = noop }) {
  return (
    <ul className='us-crumbs'>
      {items.map((item, i) => {
        const last = (i === (items.length - 1));
        const props = { key: i, onClick, last, ...item };
        return <Breadcrumb {...props} />;
      })}
    </ul>
  );
}
