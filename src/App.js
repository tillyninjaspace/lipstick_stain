import logo from './sensorio_wine_bottles.jpg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import About from './components/About';
import Footer from './components/Footer';
// import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch, NavLink} from 'react-router-dom';
// import store from './store'
import { SinglePostPage } from './components/SinglePage';

function App() {
  // const history = useHistory();

  return (
    // <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span>Lipstick Stain</span> is under development.
        </p>
        <p>Target Completion Date: August 31, 2021</p>
        <a style={{textAlign: "center"}}
          className="App-link"
          href="https://gracious-mcnulty-e733ac.netlify.app/portfolio.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Tilly Wright's Portfolio Website to see completed projects
        </a>
      </header>
      {/* <Switch> */}
      <NavLink to="/" className="nav">Home</NavLink>
      <NavLink to="/about" className="nav">About Lipstick Stain</NavLink>
      {/* <Route exact path="/"><Postform/><Posts /></Route> */}
       <Route
         exact
      path="/"

         render={() => (             
              <>
              <Postform/>
                
               <Posts />
              </>           
            )}
          />
            
      
      <Route path="/about"><About/></Route>
      <Route path="/posts/:postId" component = {SinglePostPage}/>
      
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