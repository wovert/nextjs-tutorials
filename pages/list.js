import React, { Component } from 'react'
import Layout from './components/layout'
import '../styles/list.css'

export default class List extends Component {
  state = {
    list: ['hello', 'nice to meet you', 'next']
  }
  render () {
    return (
      <Layout>
        <div>
          {
            this.state.list.map(item => (
              <li>{item}</li>
            ))
          }
        </div>
      </Layout>
    )
  }
} 
