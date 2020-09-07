import React, { Component } from "react";
import './Project.css';

import Navbar from '../layout/Navbar';

class Connect4 extends Component {

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Connect-4 Game
          </div>
          <div className="project-tech">
            <div className="tech">Reason</div>
            <div className="tech">OCaml</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                Implemented the minimax algorithm and alpha-beta pruning. 
                The game A.I. can play against human players and other 
                A.I.'s. 
              </li>
              <li className="detail-bullet">
                My algorithm beat 95% of other A.I.'s in the class. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Connect4;