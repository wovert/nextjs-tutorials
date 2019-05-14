import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
  render () {
    return (
      <div>
        <div>
          <input type="text" ref="ipt" />
          <button onClick={() => this.props.addTodo(this.refs.ipt.value)}>add</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (val) => {
    dispatch({
      type: 'ADD_TODO',
      payload: val
    })
  }
})

const mapStateToProps = (state) => ({
  list: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)