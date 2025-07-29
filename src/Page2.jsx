import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './css/Page2.css'

export default class 
 extends Component {
  render() {
    return (
      <div className='main1'>
          <h1>Welcome to Page2 of Front End Project</h1>
           <br/><br/>
          <div id='text1'>
          <h3>Today's Topic is HTML  & CSS basic</h3>
          </div>
           <br/><br/>
          <Link to="/page1">Go To Page1</Link>
          <br/><br/>
          <div className='link2'>
          <Link to="/">Go To HomePage</Link>
          </div>
          <br/><br/>
      </div>
    )
  }
}
