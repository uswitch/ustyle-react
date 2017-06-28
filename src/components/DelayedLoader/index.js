import React from 'react'
import LoaderContainer from '../LoaderContainer'

class DelayedLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      timedOut: false,
      timeoutID: null
    }
  }

  componentWillReceiveProps = nextProps => {
    const { isLoading: willBeLoading } = nextProps
    const { timedOut, timeoutID } = this.state
    const timeoutHandler = () => this.setState({ timedOut: true, isLoading: false, timeoutID: null })

    if (!willBeLoading && timedOut) {
      return this.setState({
        isLoading: false
      })
    }

    let newState = {
      isLoading: true,
      timedOut: false
    }

    if (!timeoutID) {
      newState = {
        ...newState,
        timeoutID: setTimeout(timeoutHandler, this.props.timeout)
      }

      this.setState(newState)
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.state.timeoutID)
  }

  render = () => {
    const { children, replaceChildren } = this.props
    const { isLoading } = this.state


    return <div className={ isLoading ? this.props.className : '' }>
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
