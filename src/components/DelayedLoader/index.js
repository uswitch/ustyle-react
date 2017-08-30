import React from 'react'
import LoaderContainer from '../LoaderContainer'

class DelayedLoader extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      timeoutID: null
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isLoading: willBeLoading } = nextProps
    const { timeoutID } = this.state
    const timeoutHandler = () => this.setState({ isLoading: this.props.isLoading, timeoutID: null })

    if (willBeLoading || timeoutID) {
      this.setState({
        isLoading: true,
        timeoutID: timeoutID || setTimeout(timeoutHandler, this.props.timeout)
      })
    } else {
      this.setState({
        isLoading: false
      })
    }
  }

  componentWillUnmount () {
    clearTimeout(this.state.timeoutID)
  }

  render () {
    const { children, replaceChildren } = this.props
    const { isLoading } = this.state

    return <div className={isLoading ? this.props.className : ''}>
      <LoaderContainer isLoading={isLoading} text={this.props.text}>
        {replaceChildren && isLoading ? null : children}
      </LoaderContainer>
    </div>
  }
}

DelayedLoader.defaultProps = {
  timeout: 400,
  replaceChildren: false
}

export default DelayedLoader
