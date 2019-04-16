import React from 'react'
import { getNews } from '../api/news'

export default class News extends React.Component {
  state = {
    news: {
      article1: '',
      article2: '',
      article3: ''
    }
  }

  componentDidMount() {
    getNews()
    .then(res => {
      this.setState({
        news: {
          article1: {
            title: res.articles[0].title,
            description: res.articles[0].description,
            agent: res.articles[0].source.name,
            content: res.articles[0].content
          },
          article2: {
            title: res.articles[1].title,
            description: res.articles[1].description,
            agent: res.articles[1].source.name,
            content: res.articles[1].content
          },
          article3: {
            title: res.articles[2].title,
            description: res.articles[2].description,
            agent: res.articles[2].source.name,
            content: res.articles[2].content
          }
        }
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>Local News</h2>
        <div>
          <h5>{this.state.news.article1.title}</h5>
          <em>{this.state.news.article1.description}</em>
          <p>{this.state.news.article1.content}</p>
          <p>- News sourced from {this.state.news.article1.agent}</p>
        </div>
        <div>
          <h5>{this.state.news.article2.title}</h5>
          <em>{this.state.news.article2.description}</em>
          <p>{this.state.news.article2.content}</p>
          <p>- News sourced from {this.state.news.article2.agent}</p>
        </div>
        <div>
          <h5>{this.state.news.article3.title}</h5>
          <em>{this.state.news.article3.description}</em>
          <p>{this.state.news.article3.content}</p>
          <p>- News sourced from {this.state.news.article3.agent}</p>
        </div>
      </React.Fragment>
    )
  }
}
