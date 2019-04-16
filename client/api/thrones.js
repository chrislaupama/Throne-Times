import request from 'superagent'

const url = 'https://anapioficeandfire.com/api/characters/'
const char = '583'

export function getThrones() {
  return request
  .get(url + char)
  .then(res => {
    return res.body
  })
}
