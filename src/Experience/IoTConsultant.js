import React, { Component } from "react";
import '../Projects/Project.css';
import ReactPlayer from 'react-player';

import Navbar from '../layout/Navbar';

import structure from '../media/structure.png';

class IoTConsultant extends Component {

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Internet of Things Consultant
          </div>
          <div className="project-tech">
            <div className="tech">IoT</div>
            <div className="tech">Research</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                Brainstormed, examined academic research papers, and analyzed corporation reports with IoT Consulting Group to co-edit 
                an informative paper: 
                <a style={{ paddingLeft: "5px" }} href="https://drive.google.com/file/d/1CGHvkh62GQ3_qRluRbQ3mTYtVYBfVNlq/view?usp=sharing" target="_blank"> 
                  Research on Power Grid Enterprises’ Development and Application of Data Mid-End Under Current Trends
                </a>
              </li>
              <li className="detail-bullet">
                Used SWOT analysis to explore the current state of Alibaba's Data Mid-End integration in China's power grid companies. Composed various
                flow charts to help readers understand the intricate structure of Data Mid-End's implementation. 
              </li>
              <li className="detail-bullet">
                Explained various algorithms: Text Segmentation Algorithm, the Entropy-Weight Method for Quantity of Information, k-Nearest Neighbors Algorithm.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default IoTConsultant;