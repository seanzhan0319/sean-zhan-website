import React, { Component } from "react";
import './Leadership.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Navbar from '../layout/Navbar';

class Leadership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'panel1': false,
      'panel2': false,
      'panel3': false,
      'panel4': false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(panel) {
    this.setState({ [panel]: !this.state[panel] })
  }

  render() {
    return (
      // <Fade>
        <div class="home">
          <Navbar />
          <p className="component-header">Leadership</p>
          <div className="acc-container">
            <Accordion expanded={this.state['panel1']} 
              style={{ boxShadow: 'none' }}
              onChange={() => this.handleChange('panel1')}>
              <AccordionSummary
                style={{ backgroundColor: "#80cbc4" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              > 
                <div className="summary-container">
                  <div className="summary">
                    Treasurer, Board Member
                  </div>
                  <div className="summary-sub">
                    Brown University Chinese Student Association
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#f0fafa" }}>
                <ul className="project-des">
                  <li className="bullet-point">
                    2020 Fall - Organized an event to send care packages to 
                    incoming freshman Chinese American students and welcome 
                    them to Brown University virtually.
                  </li>
                  <li className="bullet-point">
                    2019 School Year - Hosted Lunar New Year Show to celebrate 
                    Chinese culture. Coordinated with performers and directed 
                    the show with an auction to donate to 
                    COVID-19 relief in China. 
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <br/>
          <div className="acc-container">
            <Accordion expanded={this.state['panel2']} style={{ boxShadow: 'none' }}
              onChange={() => this.handleChange('panel2')}>
              <AccordionSummary
                style={{ backgroundColor: "#80cbc4" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              > 
                <div className="summary-container">
                  <div className="summary">
                    Advanced Physics Tutor and Advocate
                  </div>
                  <div className="summary-sub">
                    Local High School
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#f0fafa" }}>
                <ul className="project-des">
                  <li className="bullet-point">
                    Taught Advanced Placement Physics at Hope High School 
                    as a TA for two hours each week.
                  </li>
                  <li className="bullet-point">
                    Bonded with inner-city students, helped improve their 
                    understanding of the material, and advocated for them when 
                    their teacher crossed boundaries. 
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <br/>
          <div className="acc-container">
            <Accordion expanded={this.state['panel3']} style={{ boxShadow: 'none' }}
              onChange={() => this.handleChange('panel3')}>
              <AccordionSummary
                style={{ backgroundColor: "#80cbc4" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              > 
                <div className="summary-container">
                  <div className="summary">
                    Prefect - High School Senior Community Leader
                  </div>
                  <div className="summary-sub">
                    Cate School
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#f0fafa" }}>
                <ul className="project-des">
                  <li className="bullet-point">
                    Lived in a freshman boys dorm to guide and support students, 
                    such as resolving conflicts, organizing dorm olympics, 
                    and having late-night talks with students who didn't feel 
                    like they fit in at the boarding school.
                  </li>
                  <li className="bullet-point">
                    Remembered every faculty and student's name in our school of 300 people. 
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <br/>
          <div className="acc-container">
            <Accordion expanded={this.state['panel4']} style={{ boxShadow: 'none' }}
              onChange={() => this.handleChange('panel4')}>
              <AccordionSummary
                style={{ backgroundColor: "#80cbc4" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              > 
                <div className="summary-container">
                  <div className="summary">
                    Head Math Tutor 
                  </div>
                  <div className="summary-sub">
                    Cate School
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#f0fafa" }}>
                <ul className="project-des">
                  <li className="bullet-point">
                    Tutored peers in math every Thursday night, 
                    coordinated with other math tutors, 
                    and organized meetings with math teachers.
                  </li>
                  <li className="bullet-point">
                    Number of tutees who came for help doubled since I 
                    became math tutoring head. 
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <br/><br/><br/><br/><br/><br/>
        </div>
      // </Fade>
    )
  }
}

export default Leadership;