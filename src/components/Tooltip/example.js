import React, {Component} from 'react'
import assign from 'object.assign'
import Tooltip from './index'
import Icon from '../Icon/index'

export default class TooltipExample extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Tooltip
        position="bottom"
        className="tooltip-demo"
        scrollToTooltip={true}
        trigger={ <div className="us-tooltip__icon"></div> }
        tooltipContent={ <div>Content</div> }>
        <div>
          Hello
        </div>
      </Tooltip>
    )
  }
}
