import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

export default class Tabs extends PureComponent {
  onClickHandler (e, item) {
    this.props.onClick(e, item)
  }
  chevron () {
    return (
      <span className='us-tabs-nav-chevron'>
        <Icon
          name='chevron-right'
          size='small'
          color='inputgrey' />
      </span>
    )
  }
  tabsNavLink (item, key) {
    const {id, href} = item
    const realHref = href || (id ? `#${id}` : null)
    const className = cx({
      'us-tabs-nav-mainlink': true,
      'us-tabs-nav-link': true,
      'active': item.active
    })
    return (
      <a key={key}
        onClick={(e) => this.onClickHandler(e, item)}
        className={className}
        href={realHref}>{item.title}</a>
    )
  }
  tabsNav () {
    const {items} = this.props
    return (
      <nav className='us-tabs-nav'>
        <div className='us-tabs-nav-wrapper'>
          <div className='us-tabs-nav-menu'>
            {items.map(this.tabsNavLink.bind(this))}
          </div>
        </div>
      </nav>
    )
  }
  tab (item, i) {
    const {id, href} = item
    const realHref = href || (id ? `#${id}` : null)
    const tabClassName = cx({
      'us-tab': true,
      'active': item.active
    })
    const navLinkClassName = cx({
      'us-tabs-nav-mainlink': true,
      'active': item.active
    })
    return (
      <div key={i} className={tabClassName} id={item.id}>
        <h2 className='us-tab-title'>
          <a className={navLinkClassName}
            onClick={(e) => this.onClickHandler(e, item)}
            href={realHref}>
            {item.title}
            {this.chevron()}
          </a>
        </h2>
        <div className='us-tab-content'>{item.body}</div>
      </div>
    )
  }
  tabsContainer () {
    const {items} = this.props
    return (
      <div className='us-tabs-container'>
        {items.map(this.tab.bind(this))}
      </div>
    )
  }
  render () {
    return (
      <div className='us-tabs js'>
        {this.tabsNav()}
        {this.tabsContainer()}
      </div>
    )
  }
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.node,
    active: PropTypes.bool
  })),
  onClick: PropTypes.func
}

Tabs.defaultProps = {
  id: false,
  onClick: () => {}
}
