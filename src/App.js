import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Leadership from './Components/Leadership';

import Malle from './Experience/Malle';
import IoTConsultant from './Experience/IoTConsultant';

import Drone from './Projects/Drone';
import Connect4 from './Projects/Connect4';
import Search from './Projects/Search';
import TicTacToe from './Projects/TicTacToe';
import ReLearn from './Projects/ReLearn';

function App() {
  return (
    <div style={{ height: "100%" }}>
        <div className="home">
          <Router>
            {/* <Navbar /> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/leadership" component={Leadership}/>

              <Route exact path="/experience/malle" component={Malle}/>
              <Route exact path="/experience/IoT" component={IoTConsultant}/>

              <Route exact path="/projects/drone" component={Drone}/>
              <Route exact path="/projects/connect4" component={Connect4}/>
              <Route exact path="/projects/search" component={Search}/>
              <Route exact path="/projects/tictactoe" component={TicTacToe}/>
              <Route exact path="/projects/relearn" component={ReLearn}/>
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
