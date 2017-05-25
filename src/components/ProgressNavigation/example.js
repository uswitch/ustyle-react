import React from 'react'
import ProgressNavigation from './index'

const items = [{
  href: '/journey/current-supplier',
  text: 'Current supplier'
}, {
  href: '/journey/usage',
  text: 'Usage'
}, {
  href: null, // optional, not used
  text: 'Results',
  current: true
}, {
  href: null, // optional, not used
  text: 'New tariff'
}, {
  href: null, // optional, not used
  text: 'Apply'
}]

function onClick (e, item) {
  e.preventDefault()
  window.alert('You clicked a navigation link:\n' + item.href)
}

export default () => <ProgressNavigation items={items} onClick={onClick} />
