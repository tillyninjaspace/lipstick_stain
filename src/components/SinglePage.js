import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useParams, Link } from 'react-router-dom';
import { fetchPosts } from '../actions/postActions';
import giflogo from '../lipstickstain_logo.gif'

export const SinglePostPage = () => {
  
  const dispatch = useDispatch()

  useEffect( () => {
         
      try { 
         dispatch(fetchPosts())
      } catch {
          throw Error('Uh Oh')
      } 
  }, [dispatch]);   

    const {postId} = useParams()

    const postList = useSelector(state => state.posts.items)
    const post = postList.find(postItem => postItem.id === Number(postId))

  if (!postList.length === 0) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  // console.log("What is the selected postList?", postList,
  // "What's the Post ITEM", post)

  return (
    
    <section style={{paddingTop: ".5em", paddingBottom: ".5em"}}>
      <Link to="/wineries">Back to All Wine Places</Link>
      { postList && postList.length > 0  && post?
      <article className="winery">
        <h2>{post.name}</h2>
        <p>Wine Place ID: {post.id}</p>
        <img alt='winery' src={post.productimage}/>
        <p className="post-content">{post.description}</p> 
        <p>Kid-Friendly: {post.active? 'Yes' : 'No'}</p>
        <p>Location: {post.location}</p>
        {post.link? <a href={post.link} target="_blank" rel="noreferrer">See More Details or Pictures for {post.name}</a>
          : ''}
      </article>
      :
      <p>Please be patient as we're querying the database...
      <img src={giflogo} style={{maxWidth: "100px"}} alt="logo" />
      </p>
      } 
      
    </section>
  )
};