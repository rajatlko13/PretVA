import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import ProtectedRoute from './utilities/ProtectedRoute';
import SearchPage from './pages/SearchPage';

function App(props) {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/searchPage" component={SearchPage} />
        <Route path="/:path" component={NotFoundPage} />
        <Route path="/" component={Home} />
        <Redirect to='/:path' />
      </Switch>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
