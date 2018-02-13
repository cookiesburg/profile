import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,
         Route,
         Switch,
         Redirect } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/projects' component={ Projects } />
            <Redirect from='*' to='/' />
          </Switch>

          </div>
        </BrowserRouter>
      );
    }
}

export default App;
