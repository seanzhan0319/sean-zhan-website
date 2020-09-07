import React, { Component } from "react";
import './Project.css';

import Navbar from '../layout/Navbar';

class Search extends Component {

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="project-container">
          <div className="project-header">
            Search Algorithm
          </div>
          <div className="project-tech">
            <div className="tech">Scala</div>
            <div className="tech">Javascript</div>
          </div>
          <div className="project-details">
            <ul>
              <li className="detail-bullet">
                Programmed a search algorithm that presents most relevant 
                Wikipedia pages given an input. 
              </li>
              <li className="detail-bullet">
                The algorithm handles large-scale data and queries 50% faster 
                than requirement for full credit. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;