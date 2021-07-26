import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Postform from './Postform';

class Posts extends Component {
//WORKED but componentWillMount is deprecating
    // componentWillMount() {
    //     this.props.fetchPosts();
    // }
//end of WORKED

//TESTING new replacing componentWillMount
  componentDidMount() {
        this.props.fetchPosts();
    }
//end TESTING new    

//Working  but componentWillReceiveProps is deprecating
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }
//end Working

//NEW semi-working with red Error >>> trying replacement of componentWillReceive Props
    componentDidUpdate(newPost) {
        console.log("new componentDidUpdate")
        if(newPost) {
            this.props.posts.unshift(newPost)
        }
        console.log("no error for commponentDidUpdate")
    }
//end NEW    

    render() {
        const postItems = this.props.posts.map(
            post => 
            (<div key={post.id}>
                {/* <h3>{post.title}</h3>
                <p>{post.body}</p> */}
                <h2>{post.name}</h2>
                <p>{post.description}</p>
            </div>)
        )
        return (
            <div>
                <h1>Lipstick Stain's Visited Wineries</h1>
                {postItems? postItems : `No posts yet` }
            </div>
        )
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);