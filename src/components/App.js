import React, { Component } from 'react'
// import { Link } from 'react-router'
import CommentBox from './CommentBox'
class App extends Component {
  render () {
    return <div>
      <section id='page-wrapper'>
        <ul id='menu'>
          <li id='menu-info'>Home</li>
          <br />
          <li id='menu-info'>Mens</li>
          <br />
          <li id='menu-info'>Sale</li>
          <br />
          <button id='menu-info'>Close Menu</button>
          <br />
        </ul>
        <main id='page-content'>
          <img src='' alt='' height='' width='' />
        </main>
      </section>
      <section id='comment-form-wrapper'>
        <form id='comment-form'>
          <label>Join The Discussion</label>
          <div id='comment-form-fields'>
            <textarea placeholder='Name:' />
            <textarea placeholder='Comment:' />
          </div>
          <div id='comment-form-actions'>
            <button id='post' type='submit'>Post</button>
          </div>
        </form>
      </section>
      {CommentBox}
    </div>
  }
}

export default App
