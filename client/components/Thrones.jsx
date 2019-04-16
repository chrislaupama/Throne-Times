import React from 'react'
import {getThrones} from '../api/thrones'

export default class Thrones extends React.Component {
  state = {}

  componentDidMount() {
    getThrones()
    .then(person => {
      const {name, gender, culture, born} = person
      this.setState({
        name: name,
        gender: gender,
        culture: culture,
        born: born
      })
    })
    .catch(err => {
      console.error('Error:', err)
    })
  }

  render() {
    return (
      <>
        <h3>Our Ruler:</h3>
        <h5>{this.state.name}</h5>
        <ul>
          <li>Gender: {this.state.gender}</li>
          <li>Culture: {this.state.culture}</li>
          <li>Born: {this.state.born}</li>
        </ul>
        <hr/>
      </>
    )
  }
}