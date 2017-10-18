import React, {Component} from 'react'
import Tooltip from './index'

export default class TooltipExample extends Component {
  render () {
    return (
      <Tooltip
        position='bottom'
        className='tooltip-demo'
        scrollToTooltip
        trigger={<div className='us-tooltip__icon' />}
        tooltipContent={<div>Content</div>}>
        <div>
          Hello
        </div>
      </Tooltip>
    )
  }
}
