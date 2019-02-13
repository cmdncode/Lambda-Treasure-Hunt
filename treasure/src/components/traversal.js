import React, { Component } from 'react'
import axios from 'axios'


export default class Traverse extends Component {
  constructor (props) {
    super(props)
    this.state={
      roomid: 0
    }
  }
  componentDidMount () {
    const header = {
      headers: {Authorization: "Token 5f617e0516906e55ab4530499df985499805a4db"}
    }
    axios
      .get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/', header)
      .then((response) => {
        console.log('connecting to server')
        this.setState({
          roomid: response.data.room_id
        })
      })
      .catch((error) => {
        console.log('error, could not connect to server')
      })
  }
  handleMovement (direction) {
    const header = {
      headers: {Authorization: "Token 5f617e0516906e55ab4530499df985499805a4db"}
    }
    axios
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/', {
        direction: direction
      },header)
      .then((res) => console.log('posting to server...'))
      .catch((err) => console.error('could not post to server...'))
  }
  render () {
    return (<div></div>)
  }
}
