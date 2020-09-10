import React, { Component } from "react";
import './Projects.css';
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
    return (
      <div className="card-container">
        <Card style={{ boxShadow: "none"
          // , borderColor: "#80cbc4", borderWidth: "10px", borderStyle: "solid" 
          }} >
          <CardActionArea onClick={() => this.whichPanel(id)}>
            <CardMedia
              style={{ height: "180px" }}
              image={media}
              title="Contemplative Reptile"
            />
            <CardContent style={{ backgroundColor: "#f0fafa" }}>
              <Typography gutterBottom variant="h5" component="h2"
                className="card-content">
                {mainDes}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p"
                className="card-content">
                {subDes}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ backgroundColor: "#f0fafa" }}>
            <Button size="small" color="default" onClick={() => this.whichPanel(id)}>
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