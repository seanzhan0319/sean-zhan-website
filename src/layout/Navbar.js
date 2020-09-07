import React, { Component } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
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

  render() {
    return (
      <div>
        <ul className="NavBar-ul">
          <div className="left">
            {/* <li>
              <a onClick={() => this.openGit()}>
                Git
              </a>
            </li> */}
            {/* <img style={{ height: "3vw", width: "3vw" }} src={githubICON} alt="github"/> */}
            <ThemeProvider theme={theme}>
              <IconButton >
                <GitHubIcon class="Navbar-icon" 
                  onClick={() => this.openLink("github")}/>
              </IconButton>
              <IconButton>
                <LinkedInIcon class="Navbar-icon" 
                  onClick={() => this.openLink("linkedin")}/>
              </IconButton>
              <IconButton>
                <FacebookIcon class="Navbar-icon" 
                  onClick={() => this.openLink("facebook")}/>
              </IconButton>
            </ThemeProvider>

          </div>
          {/* <div className="right">
            <li className="Navbar-li">
              <Link to="/contact">
                Contact
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
      </div>
    );
  }
}

export default Navbar;
