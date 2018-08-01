/* global history */
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'

const tabHref = ({href, id}) =>
  href || (id ? `#${id}` : null)

const Chevron = () =>
  <span className='us-tabs-nav-chevron'>
    <Icon name='chevron-right' size='small' color='inputgrey' />
  </span>

const TabsNavLink = ({item, onClick}) => {
  const className = cx({
    'us-tabs-nav-mainlink': true,
    'us-tabs-nav-link': true,
    'active': item.active
  })
  return (
    <a
      onClick={onClick}
      className={className}
      href={tabHref(item)}>
      {item.title}
    </a>
  )
}

const Tab = ({item, onClick}) => {
  const tabClassName = cx({
    'us-tab': true,
    'active': item.active
  })
  const navLinkClassName = cx({
    'us-tabs-nav-mainlink': true,
    'active': item.active
  })
  return (
    <div className={tabClassName} id={item.id}>
      <h2 className='us-tab-title'>
        <a className={navLinkClassName}
          onClick={onClick}
          href={tabHref(item)}>
          {item.title}
          <Chevron />
        </a>
      </h2>
      <div className='us-tab-content'>{item.body}</div>
    </div>
  )
}

export default class Tabs extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {items: this.props.items}
  }

  onClickHandler (item, toggle = false) {
    return e => {
      e.preventDefault()
      history.pushState(null, null, e.target.href)
      const items = this.state.items.map(x => {
        if (x.id !== item.id) return {...x, active: false}
        return {...x, active: !toggle || !x.active}
      })
      this.setState({items}, () => this.props.onClick(e, item))
    }
  }

  render () {
    const {items} = this.state
    const onClick = this.onClickHandler.bind(this)
    return (
      <div className='us-tabs js'>

        <nav className='us-tabs-nav'>
          <div className='us-tabs-nav-wrapper'>
            <div className='us-tabs-nav-menu'>
              {items.map(item =>
                <TabsNavLink
                  key={item.id}
                  item={item}
                  onClick={onClick(item)} />
              )}
            </div>
          </div>
        </nav>

        <div className='us-tabs-container'>
          {items.map((item, i) =>
            <Tab
              key={item.id}
              item={item}
              onClick={onClick(item, true)} />
          )}
        </div>
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
  onClick: () => {}
}
