import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'


class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="newPostForm">
                        <label>Title:</label>
                        <input type="text" name="title" value={this.state.title}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="newPostForm">
                        <label>Body:</label>
                        <textarea name="body" value={this.state.body}
                            onChange={this.onChange}
                        />
                        
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(Postform)