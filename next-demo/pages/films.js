import React, { Component } from 'react'
import axios from 'axios'

export default class Films extends Component {
  static async getInitialProps () {
    const res = await axios.get('https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8319177', {
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
    return {
      films: res.data.data.films
    }
  }

  render () {
    return (
      <div>
        <h1>电影</h1>
        <ul>
          {
            this.props.films.map(item => {
              return <li key={item.filmId}>
                {item.name}
                <img src={item.poster} />
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}