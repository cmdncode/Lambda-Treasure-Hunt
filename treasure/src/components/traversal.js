import React, { Component } from 'react'
import axios from 'axios'


export default class Traverse extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    axios
      .get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/')
      .then((response) => {
        console.log('connecting to server')
      })
      .catch((error) => {
        console.log('error, could not connect to server')
      })
  }
  handleMovement (direction) {
    axios
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', {
        direction: direction
      })
      .then((res) => console.log('posting to server...'))
      .catch((err) => console.error('could not post to server...'))
  }
  render () {
    return (<p>Traversal Placeholder</p>)
  }
}
