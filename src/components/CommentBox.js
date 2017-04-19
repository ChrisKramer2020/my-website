import React, { Component } from 'react'

class CommentBox extends Component {
  render () {
    const comments = this._getComments() || []
    return (
      <div className='comment-box'>
        <h3>Comments</h3>
        {this._getPopularMessage(comments.length)}
        <h4 className='comment-count'>{this._getCommentsTitle(comments.length)}</h4>
        <div className='comment-list'>
          {comments}
        </div>
      </div>
    )
  }

  _getPopularMessage (commentCount) {
    const POPULAR_COUNT = 10
    if (commentCount > POPULAR_COUNT) {
      return (
        <div>
        This post is getting really popular, don't miss out!
      </div>
      )
    }
  }
  _getComments () {
    const commentList = [
      {id: 1, author: 'Chris', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png'},
      {id: 2, author: 'Mclovin', body: 'I Build Gundam', avatarUrl: 'images/default-avatar.png'}
    ]
    return commentList.map((comment) => {
      return (<Comment
        author={comment.author}
        body={comment.body}
        avatarUrl={comment.avatarUrl}
        key={comment.id} />)
    })
  }
  _getCommentsTitle (commentCount) {
    if (commentCount === 0) {
      return 'No comments yet'
    } else if (commentCount === 1) {
      return '1 comment'
    } else {
      return `${commentCount} comments`
    }
  }
}

class Comment extends Component {
  constructor () {
    super()
    this.state = {
      isAbusive: false,
      body: []
    }
  }
  render (props) {
    let commentBody
    if (!this.state.isAbusive) {
      commentBody = props.body
    } else {
      commentBody = <em>Content Marked as abusive</em>
    }
    return (
      <div className='comment'>
        <img src={props.avatarUrl} alt={`${props.author}'s picture`} />
        <p className='comment-header'>{props.author}</p>
        <p className='comment-body'>
          {commentBody}
        </p>
        <div className='comment-actions'>
          <a href='#'>Delete comment</a>
          <a href='#' onClick={this._toggleAbuse.bind}>Report as Abuse</a>
        </div>
      </div>
    )
  }

  _toggleAbuse (event) {
    event.preventDefault()
    this.setState({
      isAbusive: !this.state.isAbusive
    })
  }
}

export default CommentBox
