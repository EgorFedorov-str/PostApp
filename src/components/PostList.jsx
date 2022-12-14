import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from './Post';

function PostList({posts, title, removePost}) {

  if(!posts.length) {
    return(
      <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
    )
  }
    
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
          <Post removePost={removePost} index={index} post={post}  />
        </CSSTransition>
      ))}
      </TransitionGroup>
      </div>
  )
}

export default PostList