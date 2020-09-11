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
import Footer from '../layout/Footer';

import fullStack from '../media/fullStack.png';
import unify from '../media/unify.png';
import structure from '../media/structure.png';

class Experience extends Component {
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

  cardGenerator(id, media, mainDes, subDes, time) {
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
                {subDes} <br/><br/> {time}
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
      <div style={{ height: "100%" }}>
        <Navbar />
        <div className="component-container">
          <p className="component-header">Experience</p>
          <div className="card-flex-container">
            {this.cardGenerator(
              "malle",
              fullStack,
              "Lead Full-Stack Web Developer",
              "Developed two modular and scalable React web apps that allow Brown's Malle Lab researchers to study people's perception of fairness in criminal justice.",
              "June 2020 - Present"
            )}
            {this.cardGenerator(
              "IoT",
              structure,
              "Internet of Things Consultant",
              "Brainstormed, examined academic research papers, and analyzed corporation reports with IoT Consulting Group to co-edit a research paper.",
              "Nov 2019 - Jan 2020"
            )}
          </div>
          <br/><br/><br/><br/><br/><br/>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Experience;