import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';
// import Postform from './Postform';
import Loading from './Loading';


class Posts extends Component {
//WORKED but componentWillMount is deprecating
    // componentWillMount() {
    //     this.props.fetchPosts();
    // }
//end of WORKED

// constructor(props) {
//     super(props);
//     this.onDelete = this.onDelete.bind(this);
// }

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

        if(nextProps.deletePost) {
            console.log("nextProps.deletePost")
            this.props.posts.unshift(nextProps.deletePost)
        }



    console.log("DID this RUN?!")
    }
//end Working

//NEW semi-working with red Error >>> trying replacement of componentWillReceive Props
    componentDidUpdate(newPost, deletePost) {
        console.log("new componentDidUpdate")
        if(newPost) {
            this.props.posts.unshift(newPost)
        } else if(deletePost) {

        //newforDeletePost
        
            console.log("TESTING Delete under Component DID Update")
            const { id} = deletePost
            const foundItem = this.props.posts.find(post => post.id === id)
            if (foundItem) {
                console.log("FOUND ITEM!")
                // foundItem.active = active
            }
        }
    }
//end NEW    



// for 7/31
async onDelete (id) {
    try {
        const deleteItem = await this.props.deletePost(id)
        console.log("Delete worked.", id)
        console.log("what is delete item", deleteItem);

    //     this.props.deleteTerritoryGeography(id);
    // var geographyIndex = this.props.territoryGeographies.findIndex(x => x.Id==id)
    // this.setState(state => {
    //             this.props.territoryGeographies.splice(geographyIndex, 0, );
    //             return {territoryGeographies: this.props.territoryGeographies};
    //         });
    } catch (error ) {
        console.error(error)
    }
};
//end 7/31

    render() {
    
        const postItems = this.props.posts.map(
            post => 
            (<div key={post.id} className="winePlace">
                <h2>{post.name}</h2>
                <p>{post.description}</p>
                <img style={{maxWidth: "300px"}} alt="winery or tasting room" src={post.productimage}/>
                <Link to={`/posts/${post.id}`} className="button muted-button">
                    View More Details
                </Link>
                <p>Active: {post.active? 'Yes' : 'No'}</p>
                {/* <button className="deleteButton" onClick={() => this.onDelete(post.id) */}
                    <button className="deleteButton" onClick={() => {this.onDelete(post.id)
                    const thisActiveChangePost = this.props.posts.find(inActiveItem => inActiveItem.id === post.id)
                    console.log("What is the found post for new Inactive", thisActiveChangePost)
                    thisActiveChangePost.active = false;
                }

                //END OF new 8/3
            }>DELETE</button>
            </div>)
        )
        return (
            <div>
                <h1>Lipstick Stain's Visited Wineries</h1>
                {postItems.length === 0? <Loading /> : <h3>There are {postItems.length} Visited Wineries or Tasting Rooms</h3>}
                <div className="winePlaces">{postItems.length > 0 ? postItems : <p>Thank you for your patience as we're querying the database.</p> }</div>
            </div>
        )
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    //new
    deletePost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    deletePost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);