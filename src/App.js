// import logo from './sensorio_wine_bottles.jpg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import About from './components/About';
import Footer from './components/Footer';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
// import store from './store'
import { SinglePostPage } from './components/SinglePage';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import { fetchPosts } from './actions/postActions';

function App() {


  //NEW for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const dispatch = useDispatch()

  useEffect( () => {
         
      try { 
         dispatch(fetchPosts())
      } catch {
          throw Error('Uh Oh')
      } 
  }, [dispatch]); 

  const paginationItems = useSelector(state => state.posts.items)
  console.log("Pagination Items", paginationItems)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = paginationItems.slice(indexOfFirstPost, indexOfLastPost);
  
  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(paginationItems.length/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    // const paginate = () => setCurrentPage(pageNumber);
    
    console.log("Page Numbers", pageNumbers)
  //End NEW for Pagination

  
  return (
    // <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    
      <header className="App-header">
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src={redwine} className="glass" alt="red wine" /> */}
        <p className="bannerHeader">
          <span>Lipstick Stain</span> is under development. Target Completion Date: August 31, 2021.&nbsp;  
        <a style={{textAlign: "center"}}
          className="App-link"
          href="https://gracious-mcnulty-e733ac.netlify.app/portfolio.html"
          target="_blank"
          rel="noopener noreferrer"
        >
           Go Tilly Wright's Portfolio Website to see completed projects
        </a>
        </p>
      </header>
      {/* <Switch> */}
      <NavLink to="/" className="nav">Home</NavLink>
    <NavLink to="/posts" className="nav">All Wine Places</NavLink>
      <NavLink to="/about" className="nav">About Lipstick Stain</NavLink>
      <hr></hr>
      {/* <Route exact path="/"><Postform/><Posts /></Route> */}
       <Route
         exact
      path="/"

         render={() => (             
              <>
              <Postform/>
                
               {/* <Posts /> */}

               <h2>Select a Wine Place to Read Review</h2>
               <ul className="pagination">

                  {paginationItems && currentPosts.map(post => (
                    <li key={post.id} className="listItem">
                      <Link to={`/posts/${post.id}`} className="button muted-button">
                      <h3>{post.name}</h3>
                      <img src={post.productimage} alt="Wine or Winery"/>
                </Link>
                      
                      
                    </li>
                  ))
                  }
               </ul>
               {/* <ul className="pageIndex"> */}
               <h5>Go to Page</h5>
                {pageNumbers.map(number => (
                    <div key={number} className="page" style={{color: "red"}}>
                        <button onClick={() => setCurrentPage(number)} className="pageLink" >
                        {number}
                        </button>
                    </div>
                )
                )}
            {/* </ul> */}
              </>           
            )}
          />
            
      
      <Route path="/about"><About/></Route>
      <Route exact path="/posts"><Posts/></Route>
      <Route exact path="/posts/:postId" component = {SinglePostPage}/>
      
      {/* </Switch> */}
      {/* <Redirect to="/" /> */}
      <Footer/>
    </div>
   
    </BrowserRouter>
    // </Provider>
  );
}

export default App;


// <Route
//             exact
//             path="/"

//             render={() => (
//               <>
//                 <Postform/>
                
//                 <Posts />
                
//               </>
//             )}

//           />