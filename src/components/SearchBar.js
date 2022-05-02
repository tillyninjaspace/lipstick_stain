import React, {useState, Component} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

class Posts extends Component {

      componentDidMount() {
            this.props.fetchPosts();
        }
    };

const SearchBar = () => {
    const postList = useSelector(state => state.posts.items)

    const [searchPhrase, setSearchPhrase] = useState("");

    return (
        <>
        <div className="searchResults">
        <h2>Wine Place Search Tool</h2>
        <labe>Enter Search Term: </labe>
        <input className="search" type="text" value={searchPhrase} name="search-term" placeholder="search"
            onChange={event =>{setSearchPhrase(event.target.value)}}/>

        <section>
            {searchPhrase? <h3>Search Result:</h3> : ""}
            {postList && postList.filter((product) => {
                if (searchPhrase === "") {
                    return ""
                } else if (product.name.toLowerCase().includes(searchPhrase.toLowerCase())) {
                    return product
                } else if (product.description.toLowerCase().toLowerCase().includes(searchPhrase.toLowerCase())) {
                    return product
                }
            }).map((product) => 
                    <div>
                        <a href={`http://lipstainedglass.com/wineries/${product.id}`}>
                        {product.name} <span className="learnMoreLink">Click to learn more</span>
                        </a>
                    </div>
            )}
            </section>
            </div>
        </>
    )
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};

export default SearchBar;