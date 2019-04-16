import React from 'react'
import {getFinance} from '../api/finance'

 export default class Finance extends React.Component {
  state = {
    news: {
      article1: '',
      article2: '',
      article3: '',
      article4: '',
      article5: ''
    }
  }

  componentDidMount(){
    getFinance()
    .then(res => {
      this.setState({
        news: {
          article1: {
            title: res.articles[0].title,
            img: res.articles[0].urlToImage,
            content: res.articles[0].content,
            url: res.articles[0].url
          }, 
          article2: {
            title: res.articles[1].title,
            img: res.articles[1].urlToImage,
            content: res.articles[1].content,
            url: res.articles[1].url
          },
          article3: {
            title: res.articles[2].title,
            img: res.articles[2].urlToImage,
            content: res.articles[2].content,
            url: res.articles[2].url
          },
          article4: {
            title: res.articles[3].title,
            img: res.articles[3].urlToImage,
            content: res.articles[3].content,
            url: res.articles[3].url
          }, 
          article5: {
            title: res.articles[4].title,
            img: res.articles[4].urlToImage, 
            content: res.articles[4].content,
            url: res.articles[4].url
          }
        }
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
            <div>
              <h5>{this.state.news.article1.title}</h5>
                <p>{this.state.news.article1.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article2.title}</h5>
                <p>{this.state.news.article2.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article3.title}</h5>
                <p>{this.state.news.article3.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article4.title}</h5>
                <p>{this.state.news.article4.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article5.title}</h5>
                <p>{this.state.news.article5.content}</p>
            </div>
            
          </React.Fragment>
        )}
}
