import React, { Component } from 'react'
import DelayedLoader from './index'

export default class ExampleLoader extends Component {
  constructor (props) {
    super(props)
    this.state = { isLoading: false }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ isLoading: !this.state.isLoading })
    }, 2000)
  }

  render () {
    return (
      <div>
        <p>Loader below changes its loaded state every 2000ms, and has a minimum timeout of 3000ms</p>
        <pre>{JSON.stringify(this.state, null, ' ')}</pre>
        <DelayedLoader text='Loading...' isLoading={this.state.isLoading} timeout={3000}>
          <ul className='us-list'>
            <li><a href='#'>List item 1</a></li>
            <li><a href='#'>List item 2</a></li>
            <li><a href='#'>List item 3</a></li>
            <li><a href='#'>List item 4</a></li>
          </ul>
        </DelayedLoader>
      </div>
    )
  }
}
