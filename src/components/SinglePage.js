import React from 'react'
import { useSelector, connect } from 'react-redux'
import {useParams, Link} from 'react-router-dom';
// import { fetchPosts } from '../actions/postActions';

export const SinglePostPage = () => {
  // const { postId } = match.params
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
    
    <section style={{paddingTop: "1em", paddingBottom: "1em"}}>
      <Link to="/">Back to All Wine Places</Link>
      { postList && postList.length > 0  && post && 
      <article className="winery">
        <h2>Wine Place ID: {post.id}</h2>
        <img alt='winery' src={post.productimage}/>
        <h3>{post.name}</h3>
        <p className="post-content">{post.description}</p> 
        <p>Location: {post.location}</p>
        <p>Link: {post.link}</p>
      </article>
      } 
    </section>
  )
}

// export default SinglePostPage;

const mapStateToProps = state => ({ contacts: state.posts.items })

export default connect(mapStateToProps)(SinglePostPage);