import request from 'superagent'

const url = 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey='
const token = '044cdf6ea4ae4a1d8cbdd309903569c1'

export function getFinance() {
  return request
  .get(`${url}${token}`)
  .then(res => {
    return [
      {
        title: res.body.articles[0].title,
        img: res.body.articles[0].urlToImage,
        content: res.body.articles[0].content,
        url: res.body.articles[0].url
      },
      {
        title: res.body.articles[1].title,
        img: res.body.articles[1].urlToImage,
        content: res.body.articles[1].content,
        url: res.body.articles[1].url
      },
      {
        title: res.body.articles[2].title,
        img: res.body.articles[2].urlToImage,
        content: res.body.articles[2].content,
        url: res.body.articles[2].url
      },
      {
        title: res.body.articles[3].title,
        img: res.body.articles[3].urlToImage,
        content: res.body.articles[3].content,
        url: res.body.articles[3].url
      },
      {
        title: res.body.articles[4].title,
        img: res.body.articles[4].urlToImage,
        content: res.body.articles[4].content,
        url: res.body.articles[4].url
      }
    ]
  })
}
