import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/todo'

class Index extends Component {
  render () {
    return <Todo />
  }
}
export default connect()(Index)
