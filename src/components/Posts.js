import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';
import Loading from './Loading';
import Data from './Data';

class Posts extends Component {

//Replacing componentWillMount
  componentDidMount() {
        this.props.fetchPosts();
    }
//end Replacing    

//Working but componentWillReceiveProps is deprecating

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }

        // if(nextProps.deletePost) {
        //     console.log("nextProps.deletePost")
        //     this.props.posts.unshift(nextProps.deletePost)
        // }
    };
//end Working

//Using 8/17/2021 componentdDidUdpate to replace componentWillReceiveProps
// componentDidUpdate(prevProps, prevState ) {
//     if (this.props.newPost !== prevProps.newPost) {
//     //   logVisibleChange(this.props.isVisible);
//     this.props.posts.unshift(this.props.newPost)
//     }
//   }

//end

//NEW Not Working but this be needed for new React 17 >>> trying replacement of componentWillReceive Props
    // componentDidUpdate(newPost, deletePost) {
    //     console.log("new componentDidUpdate")
    //     if(newPost) {
    //         this.props.posts.unshift(newPost)
    //     } else if(deletePost) {

    //         console.log("TESTING Delete under Component DID Update")
    //         const { id} = deletePost
    //         const foundItem = this.props.posts.find(post => post.id === id)
    //         if (foundItem) {
    //             console.log("FOUND ITEM!")
    //             // foundItem.active = active
    //         }
    //     }
    // }

    //BTURN
    // componentDidUpdate(nextProps) {
    //     if(nextProps.newPost) {
    //         this.props.posts.unshift(nextProps.newPost)
    //     }

    //     // if(nextProps.deletePost) {
    //     //     console.log("nextProps.deletePost")
    //     //     this.props.posts.unshift(nextProps.deletePost)
    //     // }

    //     console.log("ComponentDidUpdate RAN.")
    // };


    //End of BTURN
//end NEW    




async onDelete (id) {
    try {
        const deleteItem = await this.props.deletePost(id)
        console.log("Delete worked.", id)
        console.log("what is delete item", deleteItem);
    } catch (error ) {
        console.error(error)
    }
};


    render() {

        const postItems = this.props.posts.map(
            post => 
            ( <div key={post.id} className="winePlace">
                <h2><Link to={`/wineries/${post.id}`} className="button muted-button wineName">{post.name}</Link></h2>
                <p>{post.description}</p>
                
                <Link to={`/wineries/${post.id}`} className="button muted-button">
                <img style={{maxHeight: '300px', maxWidth: "220px"}} alt={post.name + ' Picture in SLO County'} src={post.productimage}/>
                    View More Details
                </Link>
                <p>ID: {post.id}</p>
                <p><span style={{fontWeight: "bold"}}>ADA-Friendly:</span> {post.active? 'Yes' : 'No'}</p>
                <p><span style={{fontWeight: "bold"}}>Location:</span> {post.location}</p>
            </div>)
            )
//Data.js Prep for when Heroku disappears in November 2022
            // const dataPost = Data.posts.map(
            //      post => 
            //     ( <div key={post.id} className="winePlace">
            //         <h2><Link to={`/wineries/${post.id}`} className="button muted-button wineName">{post.name}</Link></h2>
            //         <p>{post.description}</p>
                    
            //         <Link to={`/wineries/${post.id}`} className="button muted-button">
            //         <img style={{maxHeight: '300px', maxWidth: "220px"}} alt={post.name + ' Picture in SLO County'} src={post.productimage}/>
            //             View More Details
            //         </Link>
            //         <p>ID: {post.id}</p>
            //         <p><span style={{fontWeight: "bold"}}>Kid-Friendly:</span> {post.active? 'Yes' : 'No'}</p>
            //         <p><span style={{fontWeight: "bold"}}>Location:</span> {post.location}</p>
            //     </div>)
            //     )          

        return (  
            <>
            <h1>Lipstained Glass' Visited Wineries</h1>
             {postItems.length === 0? <Loading /> : <h3>There are {postItems.length} Visited Wineries or Tasting Rooms</h3>}
            <div className="winePlaces">{postItems.length > 0 ? postItems : <p>Thank you for your patience as we're querying the database.</p> }</div>

           
                {/* <h1>Visited Wineries</h1>
                {dataPost.length === 0? <Loading /> : <h3>There are {dataPost.length} Visited Wineries or Tasting Rooms</h3>}
                <div className="winePlaces">{dataPost.length > 1 ? dataPost: <p>Still loading...</p>}</div>
           */}
            </>
        )
    }
};

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    // deletePost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    // deletePost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);