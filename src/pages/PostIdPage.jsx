import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'

function PostIdPage() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
        
    })
    const [fetchComments, isLoadingComment, commentError] = useFetching(async () => {
        const response = await PostService.getComments(params.id)
        setComments(response.data);
        
    })
    const params = useParams()
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    
  return (
    <div>
        <div style={{textAlign: 'center'}}>
            <h1>
            Пост № {params.id}
        </h1>
        {isLoading
            ? <Loader/>
            : <div>
            {post.id}. {post.title}
        </div>}
        </div>
        <div style={{border: '2px solid teal', marginTop: '20px'}}>
            <h1>Комментарии</h1>
        {isLoadingComment
            ? <Loader/>
            : <div>
                {comments.map(comm => 
                    <div key={comm.id} style={{marginTop: 15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>)}
            </div>}
        </div>
        
    </div>
  )
}

export default PostIdPage