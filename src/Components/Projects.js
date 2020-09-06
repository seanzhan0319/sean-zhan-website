import React, { Component } from "react";
import './Projects.css';
import { Redirect } from 'react-router';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Navbar from '../layout/Navbar';

import fullStack from '../media/fullStack.png';
import drone from '../media/drone.png';
import connect4 from '../media/connect4.jpg';
import search from '../media/search.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'panel1': false,
      'panel2': false,
      'panel3': false,
      'panel4': false
    };

    this.handleChange = this.handleChange.bind(this);
    this.cardGenerator = this.cardGenerator.bind(this);
    this.whichPanel = this.whichPanel.bind(this);
  }

  handleChange(panel) {
    this.setState({ [panel]: !this.state[panel] })
  }

  whichPanel(id) {
    console.log(id);
    this.props.history.push("/experience/" + id);
  }

  cardGenerator(id, media, mainDes, subDes) {
    // const mainDes = mainDes;
    // const subDes = subDes;
    return (
      <div className="card-container">
        <Card style={{ boxShadow: "none" }}>
          <CardActionArea onClick={() => this.whichPanel(id)}>
            <CardMedia
              style={{ height: "180px" }}
              image={media}
              title="Contemplative Reptile"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {mainDes}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {subDes}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => this.whichPanel(id)}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div class="home">
        <Navbar />
        <p className="component-header">Experience & Projects</p>
        <div>
          {/* <div className="acc-container">
            <Accordion expanded={this.state['panel1']} style={{ boxShadow: 'none' }}
              onChange={() => this.handleChange('panel1')}>
              <AccordionSummary
                style={{ backgroundColor: "#80cbc4" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              > 
                <div className="summary-container">
                  <div className="summary">
                    Full-Stack Web Application Intern, Lead Developer
                  </div>
                  <div className="summary-sub">
                    Brown University Malle's Lab
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#d3f0ee" }}>
                <div>
                  <div style={{ float: "top" }}>
                    <ul className="project-des">
                      <li>
                        Developed two modular and scalable React web apps that allow 
                        Brown's Malle lab researchers to study people's perception of 
                        fairness in criminal justice. 
                      </li>
                      <li>
                        Built a versatile Node.js API that enables integration across the two apps and Qualtrics survey tool.
                      </li>
                      <li>
                        Enabled randomizing experiments by adding a feature to let researchers easily import previously configured questions.
                      </li>
                      <li>
                        Led the development team by 1. communicating with researchers to make sure the apps meet their needs 2. planning out weekly goals for the team 3. drawing app flow charts so that everyone stayed on the same page. 
                      </li>
                    </ul>
                  </div>
                  <div style={{ float: "bottom" }}>
                    skills 
                  </div>
                </div>
                
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
                    Autonomous Drone Flight
                  </div>
                  <div className="summary-sub">
                    Independent Project
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#d3f0ee" }}>
                <ul className="project-des">
                  <li>
                    Programmed an open-source DJI Tello drone and incorporated 
                    a body-detection image-recognition algorithm (OpenPose) to 
                    achieve autonomous flight. The drone is able to track and 
                    follow a person based on body keypoints and respond to 
                    gestures to fly in all directions. 
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
                    Connect-4 Game
                  </div>
                  <div className="summary-sub">
                    Class Project
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#d3f0ee" }}>
                <ul className="project-des">
                  <li>
                    Implemented the minimax algorithm and alpha-beta pruning. 
                    The game A.I. can play against human players and other 
                    A.I.'s. 
                  </li>
                  <li>
                    My algorithm beat 95% of other A.I.'s in the class. 
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
                    Search Algorithm
                  </div>
                  <div className="summary-sub">
                    Class Project
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#d3f0ee" }}>
                <ul className="project-des">
                  <li>
                    Programmed a search algorithm that presents most relevant 
                    Wikipedia pages given an input. 
                  </li>
                  <li>
                    The algorithm handles large-scale data and queries 50% faster 
                    than requirement for full credit. 
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <br/><br/> */}
        </div>
        <div className="card-flex-container">
          {this.cardGenerator(
            "malle",
            fullStack,
            "Lead Full-Stack Web Developer",
            "Developed two modular and scalable React web apps that allow Brown's Malle Lab researchers to study people's perception of fairness in criminal justice."
          )}
          {this.cardGenerator(
            "drone",
            drone,
            "Autonomous Drone Flight",
            "Programmed an open-source DJI Tello drone and incorporated a body-detection image-recognition algorithm (OpenPose) to achieve autonomous flight."
          )}
          {this.cardGenerator(
            "connect4",
            connect4,
            "Connect-4 Game",
            "Implemented the minimax algorithm and alpha-beta pruning. The game A.I. can play against human players and other A.I.'s. My algorithm beat 95% of other A.I.'s in the class."
          )}
          {this.cardGenerator(
            "search",
            search,
            "Search Algorithm",
            "Programmed a search algorithm that presents most relevant Wikipedia pages given an input. The algorithm handles large-scale data and queries 50% faster than requirement for full credit. "
          )}
        </div>
        <br/><br/>
      </div>
    )
  }
}

export default Projects;