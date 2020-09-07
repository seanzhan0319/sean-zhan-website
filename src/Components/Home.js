import React, { Component } from "react";
import './Home.css';
import Button from '@material-ui/core/Button';

import Navbar from '../layout/Navbar';
import proCircle from '../media/proCircle.png';

class Home extends Component {

  openResume() {
    window.open("https://drive.google.com/file/d/1QdTP497UZiekfqdF43tuife-y4ssn3kA/view?usp=sharing",
      "_blank");
  }  

  render() {
    return (
      // <Fade in={false} timeout={1000}>
        <div class="home">
          <Navbar />
          <div className="home-container">
            <div className="group1">
              <div className="name-resume">
                Sean Zhan 
                <Button style={{ fontSize:'1.2vw' }} variant="outlined"
                  onClick={() => {this.openResume()}}>
                    Resume  
                </Button>
              </div>
              <img className="proCircle" src={proCircle} alt="proCircle"/>
            </div>
            <div className="group2">
              <div style={{ fontSize: "2.2vw" }}>
                Hi! 
              </div>
              <br/>
              <div className="intro">
                I'm an aspiring student at Brown University concentrating in Computer 
                Science and Applied Math. <br/><br/>
                I'm experienced in full-stack web application development. My strengths 
                mainly lie in building versatile back-ends and customer-focused 
                products. I'm energetic and creative, and you can trust 
                me to get things done. <br/><br/> 
                In my free time, I build and race drones, play the guitar, 
                and watch Trevor Noah. 
              </div>
            </div>
          </div>
        </div>
      // </Fade>
    )
  }
}

export default Home;