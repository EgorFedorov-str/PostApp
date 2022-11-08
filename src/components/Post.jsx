import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/Button/MyButton'

function Post({ post, removePost}) {
  let navigate = useNavigate()
  return (
    <div><div className="post">
        <div className="post__content">
          <strong>{post.id}. {post.title}</strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => {
            navigate(`/posts/${post.id}`)
          }}>Открыть</MyButton>
          <MyButton onClick={() =>removePost(post)}>Удалить</MyButton>
        </div>
      </div></div>
  )
}

export default Post