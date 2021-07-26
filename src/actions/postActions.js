import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts= () => dispatch => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('http://lipstickstain.herokuapp.com/api/posts')
    .then(res => res.json())
    .then(info => dispatch({
        type:FETCH_POSTS,
        payload: info.posts
    }));
}

export const createPost = (postData) => dispatch => {
    
    console.log("postAction.js is working")
    
    fetch('https://jsonplaceholder.typicode.com/posts',
    {method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(postData)
    })
    .then(res=> res.json())
    .then(post => 
        dispatch({
            type: NEW_POST,
            payload: post
        })
        )
}

//dispatch is a resolver so it'll be type and payload