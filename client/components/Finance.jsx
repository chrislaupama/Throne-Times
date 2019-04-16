import React from 'react'
import { getFinance } from '../api/finance'

export default class Finance extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    getFinance()
      .then(res => {
        this.setState({
          news: res
        })
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <h2>Finance Times</h2>
        {this.state.news.map(article => {
          return (
            <div key={article.index}>
              <h5>{article.title}</h5>
              <p>{article.content}</p>
              <p>- News sourced from {article.url}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
