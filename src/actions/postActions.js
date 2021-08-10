//trying to fix fetch issue? on safari
import 'babel-polyfill';
import fetch from 'cross-fetch';
//end trying...

import { FETCH_POSTS, NEW_POST, DELETE_POST } from "./types";

export const fetchPosts = () => dispatch => {
    fetch('https://lipstickstain.herokuapp.com/api/posts')
    .then(res => res.json())
    .then(info => dispatch({
        type:FETCH_POSTS,
        payload: info.posts
    }));
}

export const createPost = (postData) => dispatch => {
    
    console.log("postAction.js New Post is working")
//ORIGINAL
    // fetch('https://jsonplaceholder.typicode.com/posts',
    // {method: 'POST',
    // headers: {'content-type': 'application/json'},
    // body: JSON.stringify(postData)
    // })
    // .then(res=> res.json())
    // .then(post => 
    //     dispatch({
    //         type: NEW_POST,
    //         payload: post
    //     })
    //     )
//end ORIGINAL

//lipstickstain_database call
// let headers = new Headers();
// headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     headers.append('Origin','http://localhost:3000');

fetch('https://lipstickstain.herokuapp.com/user/post',
{method: 'POST',
body: postData
})
.then(res=> res.json())
.then(post => 
    dispatch({
        type: NEW_POST,
        payload: post
    })
    )
//end of lipstickstain_database call

}

//dispatch is a resolver so it'll be type and payload

export const deletePost = (postId) => dispatch =>  {
    console.log("delete postAction.js reached")
    fetch(`https://lipstickstain.herokuapp.com/user/post/${postId}`,
    {   method: 'DELETE',
    // body: JSON.stringify(postId),
    //BOTTOM headers work with or without content type
        // headers: {'Content-Type': 'application/json'}
    })
    // .then(res=> res.json()) DON't NEED! Can Delete it
    .then(post => 
    dispatch({
        type: DELETE_POST,
        payload: post
    }))
};