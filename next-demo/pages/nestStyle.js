import React, { Component } from 'react'
import Layout from './components/layout'
export default class NestStyle extends Component {
  render () {
    return (
      <Layout>
        <div>
          <style jsx>{`
            h1 {
              background: blue
            } 
          `}</style>
          <h1>
            NestStyle Page
          </h1>
        </div>
      </Layout>
    )
  }
} 
