import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost} from '../actions/postActions'


class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
                location: '',
                link: '',
                picture: '',
                selectedFile: '',
                // fileUpload: '',
                imagePreview: '',
        };
        this.onChange=this.onChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
            // fileImageUpload = React.useRef();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onFileChange(e) {
        this.setState({ selectedFile: e.target.files[0] });
        this.setState({ imagePreview: URL.createObjectURL(e.target.files[0]) } );
        this.setState({ picture: URL.createObjectURL(e.target.files[0]) });
    };

    async onSubmit (e) {
        e.preventDefault();
        const formData =  new FormData(); 
            formData.append('name', this.state.name)
            formData.append('description', this.state.description)
            formData.append('location', this.state.location)
            formData.append('link', this.state.link)
            formData.append('picture', this.state.picture)
            formData.append('productimage', this.state.selectedFile)         
        console.log("What is form data? in onSubmit", formData)
        await this.props.createPost(formData);
  
            this.setState({
                name: '',
                description: '',
                imagePreview: '',
                location: '',
                link: '',
                productimage:'',
              });
        
    }

    render() {
        return (
            <div>
                <h1>Add a Wine Place</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="newPostForm">
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="newPostForm">
                        <label>Description:</label>
                        <textarea name="description" value={this.state.description}
                            onChange={this.onChange}
                        />
                        
                    </div>

                     <div className="newPostForm">
                        <label>Location:</label>
                        <input type="text" name="location" value={this.state.location}
                            onChange={this.onChange}
                        />

                    </div>


                     <div className="newPostForm">
                        <label>Link:</label>
                        <input type="text" name="link" value={this.state.link}
                            onChange={this.onChange}
                        />

                    </div>

                        <img alt='' src={this.state.imagePreview} />
                        <input type="file" label="Upload an image" 
                        onChange={this.onFileChange} 
                        required 
                        // ref={fileImageUpload}
                        />

                <button type="submit">Submit</button>
              </form>
           </div>
         )
    }
//END OF REVERSIONING          

};

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(Postform)