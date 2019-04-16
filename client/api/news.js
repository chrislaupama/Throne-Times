import request from 'superagent'

const url = 'https://newsapi.org/v2/top-headlines?'
const country = 'country=nz&'
const token = '855e439c689c484b9818556631826045'

export function getNews() {
  return request
  .get(url + country + 'apiKey=' + token)
  .then(res => {
    return [
      {
        title: res.body.articles[0].title,
        description: res.body.articles[0].description,
        agent: res.body.articles[0].source.name,
        content: res.body.articles[0].content
      },
      {
        title: res.body.articles[1].title,
        description: res.body.articles[1].description,
        agent: res.body.articles[1].source.name,
        content: res.body.articles[1].content
      },
      {
        title: res.body.articles[2].title,
        description: res.body.articles[2].description,
        agent: res.body.articles[2].source.name,
        content: res.body.articles[2].content
      }
    ]
  })
}
