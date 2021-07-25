import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts= () => dispatch => {
            console.log("Hello, this is about to fetch posts")
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type:FETCH_POSTS,
                payload: posts
                //you can call it posts instead of payload
            }));
}

//dispatch is a resolver so it'll be type and payload