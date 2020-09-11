import React, { Component } from "react";
import './Project.css';
import ReactPlayer from "react-player";

import Navbar from '../layout/Navbar';

class ReLearn extends Component {

  openRepo() {
    window.open("https://github.com/seanzhan0319/Reinforcement_Learning",
      "_blank");
  }  

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Reinforcement Learning Projects
          </div>
          <div className="project-tech">
            <button className="btn" onClick={() => this.openRepo()}>
              Git Repo
            </button>
            <div className="tech">Python</div>
            <div className="tech">PyTorch</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                Implemented Deep Q Networks and wrote an agent to beat various games such as the Cart-Pole problem where a moving cart learns to balance a tall pole.
              </li>
              <li className="detail-bullet">
                The agent trades off between exploring the given environment or exploiting it. It's flexible and also learns to play atari games such as Pong. 
              </li>
            </ul>
          </div>
          <div className="project-videos">
            <div className="project-video">
              < ReactPlayer controls
                width="100%" height="100%"
                playbackRate = {1.25}
                url="https://youtu.be/Ui0sMgrwODw" 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReLearn;