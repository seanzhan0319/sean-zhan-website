import React, { Component } from "react";
import './Project.css';

import Navbar from '../layout/Navbar';

class Drone extends Component {

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Autonomous Drone Flight
          </div>
          <div className="project-tech">
            <div className="tech">Python</div>
            <div className="tech">OpenCV</div>
            <div className="tech">OpenPose</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                Programmed an open-source DJI Tello drone and incorporated 
                a body-detection image-recognition algorithm (OpenPose) to 
                achieve autonomous flight. 
              </li>
              <li className="detail-bullet">
                The drone is able to track and 
                follow a person based on body keypoints and respond to 
                gestures to fly in all directions. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Drone;