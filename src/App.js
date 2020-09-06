import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Leadership from './Components/Leadership';
import Malle from './Projects/Malle';
import Drone from './Projects/Drone';
import Connect4 from './Projects/Connect4';
import Search from './Projects/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/experience" component={Projects}/>
        <Route exact path="/leadership" component={Leadership}/>
        <Route exact path="/experience/malle" component={Malle}/>
        <Route exact path="/experience/drone" component={Drone}/>
        <Route exact path="/experience/connect4" component={Connect4}/>
        <Route exact path="/experience/search" component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
