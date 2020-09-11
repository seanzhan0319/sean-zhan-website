import React, { Component } from "react";
import './Project.css';
import ReactPlayer from "react-player";

import Navbar from '../layout/Navbar';

class TicTacToe extends Component {

  openRepo() {
    window.open("https://github.com/seanzhan0319/tictactoe",
      "_blank");
  }  

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Tic-Tac-Toe Game iOS App
          </div>
          <div className="project-tech">
            <button className="btn" onClick={() => this.openRepo()}>
              Git Repo
            </button>
            <div className="tech">Swift</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                The game app allows two users to play against each other while keeping track of their scores.
              </li>
              <li className="detail-bullet">
                Developed the app in two hours as a speed coding challenge. 
              </li>
            </ul>
          </div>
          <div className="project-videos">
            <div className="project-video">
              < ReactPlayer controls
                width="100%" height="100%"
                playbackRate = {1.25}
                url="https://youtu.be/xRlzn88GP0I" 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TicTacToe;