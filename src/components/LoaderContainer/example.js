import React, {Component} from 'react'
import Loader from './index'

export default class ExampleLoader extends Component {
  constructor (props) {
    super(props)
    this.state = { isLoading: true }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({ isLoading: !this.state.isLoading })
    }, 5000)
  }
  render () {
    return (
      <Loader text='Loading...' isLoading={this.state.isLoading}>
        <ul className='us-list'>
          <li><a href='#'>List item 1</a></li>
          <li><a href='#'>List item 2</a></li>
          <li><a href='#'>List item 3</a></li>
          <li><a href='#'>List item 4</a></li>
        </ul>
      </Loader>
    )
  }
}
