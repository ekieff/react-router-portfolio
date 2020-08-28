import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Projects from './Projects';
import Homepage from './Homepage';
import Blog from './Blog';
import About from './About';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Homepage</Link>{' '}
          <Link to='/projects'>Projects</Link>{' '}
          <Link to='/blog'>My Blog</Link>{' '}
          <Link to='/about'>About Me</Link>{' '}
        </nav>
        <Route exact path='/' component={Homepage}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/about' component={About}/>
      </div>
    </Router>
  );
}

export default App;
