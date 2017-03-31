import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Mens from './Mens'
import Sale from './Sale'

import CommentBox from './CommentBox'

class App extends Component {
  render () {
    return <Router history={browserHistory}>
      <div>
        <section id='page-wrapper'>
          <ul id='menu'>
            <Router>
              <Route path='/' component={App} /><li id='menu-info'>Home</li>
              <br />
              <Route path='/Mens' component={Mens} />
              <li id='menu-info'>Mens</li>
              <br />
              <Route path='/Sale' component={Sale} />
            </Router>
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
    </Router>
  }
}

export default App
