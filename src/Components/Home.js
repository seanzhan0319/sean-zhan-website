import React, { Component } from "react";
import './Home.css';
import Button from '@material-ui/core/Button';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import proCircle from '../media/proCircle.png';
import proRec from '../media/proRec.jpg';

class Home extends Component {

  openResume() {
    window.open("https://drive.google.com/file/d/1QdTP497UZiekfqdF43tuife-y4ssn3kA/view?usp=sharing",
      "_blank");
  }  

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Navbar />
        <div className="home-container">
          <img className="proRec" 
            src={proRec} alt="SeanZhanPhoto"/>
          <div className="group2">
              <div className="name-resume">
                <div className="name">
                  Sean (Xiao) Zhan 
                </div>
                {/* <Button variant="outlined" style={{ boxShadow: "none" }}
                  onClick={() => {this.openResume()}}>
                    Resume  
                </Button> */}
              </div>
              <br/>
              <div className="intro">
                <div className="intro-paragraph">
                  I'm an aspiring student at Brown University concentrating in Computer 
                  Science and Applied Math.
                </div>
                <br/>
                I'm experienced in full-stack web application development. My strengths 
                mainly lie in building versatile back-ends and customer-focused 
                products. I'm energetic, insightful, a team player, and I can always find creative ways to solve problems. <br/><br/> 
                In my free time, I play Ultimate Frisbee, build and race drones, and play the guitar.
              </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;