import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

const STATUSES = ['current', 'next', 'complete']

class ProgressNavigationLink extends PureComponent {
  onClickHandler (e) {
    this.props.onClick(e, this.props.item)
  }
  getTextNode () {
    const {text, status, href} = this.props.item
    const props = {
      className: `us-progress__link us-progress__link--${status}`,
      children: <span className='us-tablet--inline'>{text}</span>,
      onClick: this.onClickHandler.bind(this)
    }
    switch (status) {
      case 'complete':
        return <a href={href} title={text} {...props} />
      case 'current':
      case 'next':
        return <span {...props} />
      default:
        return null
    }
  }
  render () {
    const children = this.getTextNode()
    return <li className='us-progress__item' children={children} />
  }
}

ProgressNavigationLink.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    status: PropTypes.oneOf(STATUSES)
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default class ProgressNavigation extends PureComponent {
  getItemsWithStatus () {
    const {items} = this.props
    const itemsWithStatus = []
    for (let i = 0; i < items.length; i++) {
      let status = 'complete'
      let prevStatus = (itemsWithStatus[i - 1] || {}).status
      if (prevStatus === 'current' || prevStatus === 'next') status = 'next'
      else if (items[i].current) status = 'current'
      itemsWithStatus.push(Object.assign({ status }, items[i]))
    }
    return itemsWithStatus
  }
  render () {
    const items = this.getItemsWithStatus()
    const onClick = this.props.onClick.bind(this)
    return (
      <div className='us-progress'>
        <nav>
          <ul className='us-progress__nav us-clearfix'>
            {items.map((item, i) => (
              <ProgressNavigationLink item={item} onClick={onClick} key={i} />
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

ProgressNavigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    current: PropTypes.bool
  })).isRequired,
  onClick: PropTypes.func
}

ProgressNavigation.defaultProps = {
  onClick: () => {}
}
