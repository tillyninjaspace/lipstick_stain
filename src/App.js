// import logo from './sensorio_wine_bottles.jpg';

import './App.css';
import Posts from './components/Posts';
import About from './components/About';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
// import store from './store'
import { SinglePostPage } from './components/SinglePage';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import { fetchPosts } from './actions/postActions';
import Updateform from './components/Updateform';
import headerLogo  from './lipstickstain_logo.gif'

function App() {

  const [isChanged, setIsChanged] = useState(false)
  //NEW for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const dispatch = useDispatch()

  useEffect( () => {
      try { 
         dispatch(fetchPosts())
      } catch {
          throw Error('Error with dispatching')
      } 
  }, [dispatch, isChanged]); 

  const paginationItems = useSelector(state => state.posts.items)
  console.log("Pagination Items", paginationItems)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = paginationItems.slice(indexOfFirstPost, indexOfLastPost);
  
  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(paginationItems.length/postsPerPage); i++) {
        pageNumbers.push(i);
    }
  //End NEW for Pagination

  
  return (
    // <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    
      <header className="App-header">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src={redwine} className="glass" alt="red wine" /> */}
        <p className="bannerHeader">
          <img style={{width: "50px"}}src={headerLogo} alt="Lipstick Stain Logo"/>
          <span className="appName">Lipstick Stain </span>
          <span>Wine Reviews in San Luis Obispo County by a Local</span> 
          {/* <a style={{textAlign: "center"}}
          className="App-link"
          href="https://gracious-mcnulty-e733ac.netlify.app/portfolio.html"
          target="_blank"
          rel="noopener noreferrer"
          >Go to my Portfolio to see completed work
          </a> */}
        </p>
      </header>
      {/* <Switch> */}
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/wineries" className="nav">All Wine Places</NavLink>
      <NavLink to="/about" className="nav">About Lipstick Stain</NavLink>
      <hr></hr>
      {/* <Route exact path="/"><Postform/><Posts /></Route> */}
       <Route
         exact
      path="/"

         render={() => (             
              <>
              <Welcome />
               {/* <Posts /> */}
               <h1>Select a Wine Place to Read a Review</h1>
               <ul className="pagination">

                  {paginationItems && currentPosts.map(post => (
                    <li key={post.id} className="listItem">
                      <Link to={`/wineries/${post.id}`} className="button muted-button">
                      <p>{post.id}</p>
                      <h3>{post.name}</h3>
                      <img src={post.productimage} alt="Wine or Winery"/>
                </Link>
                      
                      
                    </li>
                  ))
                  }
               </ul>
               <h5 style={{textAlign: "left", marginBottom: "0px"}}>Go to Page</h5>
                {pageNumbers.map(number => (
                    <div key={number} className="page" style={{color: "red"}}>
                        <button onClick={() => setCurrentPage(number)} className="pageLink" >
                        {number}
                        </button>
                    </div>
                )
                )}
                <Updateform isChanged={isChanged} setIsChanged={setIsChanged} />
              </>           
            )}
          />
            
      
      <Route path="/about"><About/></Route>
      <Route exact path="/wineries"><Posts/></Route>
      <Route exact path="/wineries/:postId" component = {SinglePostPage}/>
      
      {/* </Switch> */}
      {/* <Redirect to="/" /> */}
      <Footer/>
    </div>
   
    </BrowserRouter>
    // </Provider>
  );
}

export default App;