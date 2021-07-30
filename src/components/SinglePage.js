import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom';

export const SinglePostPage = () => {

    const {postId} = useParams()

    const postList = useSelector(state => state.posts.items)
    const post = postList.find(postItem => postItem.id === Number(postId))

  if (!postList) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  console.log("What is the selected postList?", postList,
  "What's the Post ITEM", post)

  return (
    <section>
      <article className="post">
        <h2>{post.id}</h2>
        <img alt='winery' src={post.productimage}/>
        <h3>{post.name}</h3>
        <p className="post-content">{post.description}</p> 
        <p>Location: {post.location}</p>
        <p>Link: {post.link}</p>
      </article>
    </section>
  )
}

export default SinglePostPage;