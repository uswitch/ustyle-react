import React, {Component} from 'react'
import Loader from './index'

export default class ExampleLoader extends Component {
  render () {
    return (
      <Loader text='Loading...'>
        <span> Sample child text </span>
      </Loader>
    )
  }
}
