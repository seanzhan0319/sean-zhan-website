import React, { Component } from "react";
import '../Projects/Project.css';
import ReactPlayer from "react-player";

import Navbar from '../layout/Navbar';

class Malle extends Component {

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Lead Full-Stack Web Developer
          </div>
          <div className="project-tech">
            <div className="tech">Javascript</div>
            <div className="tech">React</div>
            <div className="tech">React-Redux</div>
            <div className="tech">Node.js</div>
            <div className="tech">MongoDB</div>
          </div>
          <div className="project-tech">
            <div className="git">Git Repos Not Open-Source Yet</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                Developed two modular and scalable React web apps that allow 
                Brown's Malle lab researchers to study people's perception of 
                fairness in criminal justice. One app is for researchers to customize experiments (with normal curves and bar graphs) and view participant data, the other is for people to participate in those experiments.
              </li>
              <li className="detail-bullet">
                Used MongoDB and built a versatile Node.js API that enables integration across the two apps and Qualtrics survey tool.
              </li>
              <li className="detail-bullet">
                Enabled randomizing experiments by adding a feature to let researchers easily import previously configured questions.
              </li>
              <li className="detail-bullet">
                Led the development team by 1. communicating with researchers to make sure the apps meet their needs 2. planning out weekly goals for the team 3. drawing app flow charts so that everyone stayed on the same page. 
              </li>
            </ul>
          </div>
          <div className="project-videos">
            <div className="project-video">
              < ReactPlayer controls
                playbackRate = {1.25}
                width="100%" height="100%"
               url="https://youtu.be/0E-jN89yVkw" 
              />
            </div>
            <div className="project-video">
              < ReactPlayer controls
                playbackRate = {1.25}
                width="100%" height="100%"
               url="https://youtu.be/MZLObEiKFAA" 
              />
            </div>
            <div className="project-video">
              < ReactPlayer controls
                playbackRate = {1.25}
                width="100%" height="100%"
               url="https://youtu.be/H8CRcKy6M3s" 
              />
            </div>
            <div className="project-video">
              < ReactPlayer controls
                playbackRate = {1.25}
                width="100%" height="100%"
               url="https://youtu.be/m16aVBc-3io" 
              />
            </div>
            <div className="project-video">
              < ReactPlayer controls
                playbackRate = {1.25}
                width="100%" height="100%"
               url="https://youtu.be/EbhxrwxkDW4" 
              />
            </div>
            <div className="project-video">
              < ReactPlayer controls
                playbackRate = {1.25}
                width="100%" height="100%"
               url="https://youtu.be/GNeVzMznUe0" 
              />
            </div>
          </div>
        </div>
        <br/><br/><br/><br/>
      </div>
    )
  }
}

export default Malle;