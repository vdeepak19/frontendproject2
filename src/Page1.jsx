import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Page1 extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blue', height:'100vh'}}>
          
          <h1>India is my Country</h1>
          <br/><br/>
          <Link to="/page2">Go To Page2</Link>
          <br/><br/>
          <Link to="/">Go To HomePage</Link>
      </div>
    )
  }
}
