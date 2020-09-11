import React, { Component } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: "2vw"
    }
  }
  
  openLink(which) {
    const github = "https://github.com/seanzhan0319";
    const linkedin = "https://www.linkedin.com/in/sean-zhan/";
    const facebook = "https://www.facebook.com/profile.php?id=100007085505442";

    var toOpen;
    switch (which) {
      case "github":
        toOpen = github;
        break;
      case "linkedin":
        toOpen = linkedin;
        break;
      case "facebook":
        toOpen = facebook;
        break;
    };

    window.open(
      toOpen, "_blank"
    )
  }

  openResume() {
    window.open("https://drive.google.com/file/d/1QdTP497UZiekfqdF43tuife-y4ssn3kA/view?usp=sharing",
      "_blank");
  }  

  render() {
    return (
        <ul className="NavBar-ul">
          <div className="left">
            {/* <li>
              <a onClick={() => this.openGit()}>
                Git
              </a>
            </li> */}
            {/* <img style={{ height: "2vw", width: "2vw" }} src={githubICON} alt="github"/> */}
            <ThemeProvider theme={theme}>
              <IconButton >
                <GitHubIcon style={{ height: this.state.iconSize, width: this.state.iconSize, color: "white"}}
                  onClick={() => this.openLink("github")}/>
              </IconButton>
              <IconButton>
                <LinkedInIcon style={{ height: this.state.iconSize, width: this.state.iconSize, color: "white" }}
                  onClick={() => this.openLink("linkedin")}/>
              </IconButton>
              <IconButton>
                <FacebookIcon style={{ height: this.state.iconSize, width: this.state.iconSize, color: "white" }}
                  onClick={() => this.openLink("facebook")}/>
              </IconButton>
            </ThemeProvider>

            {/* <button className="Navbar-resume">
              hello
            </button> */}
          </div>
          {/* <div className="right">
            <li className="Navbar-li">
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </div> */}
          {/* <div className="right">
            <li className="Navbar-li">
              <Link onClick={() => this.openResume()}>
                Resume
              </Link>
            </li>
          </div> */}
          <div className="right">
            <li className="Navbar-li">
              <Link to="/leadership">
                Leadership
              </Link>
            </li>
          </div>
          <div className="right">
            <li className="Navbar-li">
              <Link to="/projects">
                Projects
              </Link>
            </li>
          </div>
          <div className="right">
            <li className="Navbar-li">
              <Link to="/experience">
                Experience
              </Link>
            </li>
          </div>
          <div className="right">
            <li className="Navbar-li">
              <Link to="/">
                Home
              </Link>
            </li>
          </div>
        </ul>
    );
  }
}

export default Navbar;
