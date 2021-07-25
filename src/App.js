import logo from './sensorio_wine_bottles.jpg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {Provider} from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span style = {{color: "red"}}>Lipstick Stain</span> is under development.
        </p>
        <p>Target Completion Date: August 31, 2021</p>
        <a
          className="App-link"
          href="https://gracious-mcnulty-e733ac.netlify.app/portfolio.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Tilly Wright's Portfolio Website to see completed projects
        </a>
      </header>
      <Postform/>
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
