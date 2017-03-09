import React, { Component } from 'react'
import { Link } from 'react-router'
import CommentBox from './CommentBox'
class App extends Component {
  render () {
    return <div>
      <ul id='menu'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/'><li>Mens</li></Link>
        <Link to='/'><li>Sale</li></Link>
        <a href='#menu'>Open Menu</a>
        <a href='#'>Close Menu</a>
      </ul>
      {CommentBox}
    </div>
  }
}

export default App
