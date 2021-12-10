// import logo from './sensorio_wine_bottles.jpg';
//trying to fix safari
// import 'babel-polyfill';
//end trying to fix safari
import './App.css';
import Posts from './components/Posts';
import About from './components/About';
import Welcome from './components/Welcome';
import Loading from './components/Loading';
import Footer from './components/Footer';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
// import store from './store'
import { SinglePostPage } from './components/SinglePage';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import { fetchPosts } from './actions/postActions';
// import headerLogo  from './lipstickstain_logo.gif';
import ByLocation from './components/ByLocation';
import headerLogo from './l_dark_logo.png';

function App() {

  const [isChanged, setIsChanged] = useState(false)
  const [token, setToken] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false)

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
        <p className="bannerHeader">
          <img src={headerLogo} alt="Lipstained Glass Logo"/>
          <span className="appName">Lipstained Glass </span>
          <span>Winery Reviews in San Luis Obispo County by a Local</span> 
        </p>
      </header>
      {/* <Switch> */}

      
      <button className="navButton"
        onClick={() => isNavOpen? setIsNavOpen(false) : setIsNavOpen(true)}
      >MENU</button>

      {isNavOpen? 
      <section className="babyNav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/wineries">All Wine Places</NavLink>
          <NavLink to="/edna-valley-and-paso-robles-wineries">Edna Valley &amp; Paso Robles Locations</NavLink>
          <NavLink to="/about">About</NavLink>
      </section>
      :
      ''
      } 
      <section className="topNav">
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/wineries" className="nav">All Wine Places</NavLink>
      <NavLink to="/edna-valley-and-paso-robles-wineries" className="nav">Edna Valley &amp; Paso Robles Locations</NavLink>
      <NavLink to="/about" className="nav">About</NavLink>
      </section>
      <hr></hr>
       <Route exact path="/"

         render={() => (             
              <>
              <Welcome />
               {/* <Posts /> */}
               <h1>Select a Wine Place to Read a Review</h1>
               { paginationItems.length <= 0 ? <Loading/> :
               <ul className="pagination">

                  {paginationItems && currentPosts.map(post => (
                    <li key={post.id} className="listItem">
                    <Link to={`/wineries/${post.id}`} className="button muted-button">
                      {/* <p>{post.id}</p> */}
                      <h3 className="wineName">{post.name}</h3>
                      <p style={{textAlign: 'center'}}><img src={post.productimage} alt="Wine or Winery"/></p>
                    </Link>
                    </li>
                  ))
                  }
               </ul>
                }
               <h5 style={{textAlign: "left", marginBottom: "0px"}}>Go to Page</h5>
                {pageNumbers.map(number => (
                    <div key={number} className="page" style={{color: "red"}}>
                        <button onClick={() => setCurrentPage(number)} className="pageLink" >
                        {number}
                        </button>
                    </div>
                )
                )}
              </>           
            )}
          />
            
      
      <Route path="/about"><About/></Route>
      <Route exact path="/wineries"><Posts/></Route>
      <Route exact path="/wineries/:postId" component = {SinglePostPage}/>
      <Route path="/edna-valley-and-paso-robles-wineries"><ByLocation/></Route>
      {/* </Switch> */}
      {/* <Redirect to="/" /> */}
      <Footer isChanged={isChanged} setIsChanged={setIsChanged} token={token} setToken={setToken}/>
    </div>
   
    </BrowserRouter>
    // </Provider>
  );
}

export default App;