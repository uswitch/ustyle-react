import React from 'react';

const noop = () => {};

function NavItemText ({ status, href, text, onClick = noop }) {
  let className = `us-progress__link us-progress__link--${status}`;
  let children = <span className='us-tablet--inline'>{text}</span>;
  let props = { className, children, onClick };
  switch (status) {
    case 'complete':
      return <a href={href} title={text} {...props} />;
    case 'current':
    case 'next':
      return <span {...props} />;
    default:
      return null;
  }
}

function NavItem (props) {
  return (
    <li className='us-progress__item'>
      <NavItemText {...props} />
    </li>
  );
}

function NavItemList ({ items, onClick }) {
  let cleanItems = [];
  for (let i = 0; i < items.length; i++) {
    let status = 'complete';
    let prevStatus = (cleanItems[i - 1] || {}).status;
    if (prevStatus === 'current' || prevStatus === 'next') status = 'next';
    else if (items[i].current) status = 'current';
    cleanItems.push(Object.assign({ status, onClick }, items[i]));
  }
  return (
    <ul className='us-progress__nav us-clearfix'>
      {cleanItems.map((item, i) => (
        <NavItem {...item} onClick={onClick} key={i} />
      ))}
    </ul>
  );
}

export default function ProgressNavigation (props) {
  return (
    <div className='us-progress'>
      <nav>
        <NavItemList {...props} />
      </nav>
    </div>
  );
}
