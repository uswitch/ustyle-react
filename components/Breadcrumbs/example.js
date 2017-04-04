import React from 'react';
import Breadcrumbs from './index';

const items = [{
  href: '/',
  text: 'uSwitch.com'
}, {
  href: 'http://www.uswitch.com/credit-reports/',
  text: 'Credit report'
}, {
  href: 'http://www.uswitch.com/credit-reports/guides/',
  text: 'Credit reports guides'
}, {
  href: null, // NOTE: optional, not used
  text: 'Statutory credit reports'
}];

function onClick (e) {
  e.preventDefault();
  window.alert('You clicked a breadcrumb:\n' + e.target.href);
}

export default () => <Breadcrumbs items={items} onClick={onClick} />;
