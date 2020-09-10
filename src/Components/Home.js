import React, { Component } from "react";
import './Home.css';
import Button from '@material-ui/core/Button';

import Navbar from '../layout/Navbar';
import proCircle from '../media/proCircle.png';
import proRec from '../media/proRec.jpg';

class Home extends Component {

  openResume() {
    window.open("https://drive.google.com/file/d/1QdTP497UZiekfqdF43tuife-y4ssn3kA/view?usp=sharing",
      "_blank");
  }  

  render() {
    return (
      <div class="home">
        <Navbar />
        <div className="home-container">
          <img className="proRec" 
            src={proRec} alt="SeanZhanPhoto"/>
          <div className="group2">
              <div className="name-resume">
                <div className="name">
                  Sean Zhan 
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
                products. I'm energetic and creative, and you can trust 
                me to get things done. <br/><br/> 
                In my free time, I build and race drones, play the guitar, 
                and watch Trevor Noah. 
              </div>
          </div>
        </div>          
        
      </div>
    )
  }
}

export default Home;