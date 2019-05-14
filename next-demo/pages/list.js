import React, { Component } from 'react'
import Router from 'next/router'
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
            this.state.list.map((item, index) => (
              // <li onClick={() => Router.push('/detail?id=' + (index + 1))}>{item}</li>
              <li key={index} onClick={() => Router.push({
                pathname: '/detail',
                query: {
                  id: index+1
                }
              })}>{item}</li>
            ))
          }
        </div>
      </Layout>
    )
  }
} 
