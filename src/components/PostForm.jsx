import React from 'react'
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/Button/MyButton'
import { useState } from 'react';

function PostForm({create}) {

    const [post, setPost] = useState({ title: '', body: '' });

    function addNewPost(e) {
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' });
  }

  return (
    <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Название поста"
        />

        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
  )
}

export default PostForm