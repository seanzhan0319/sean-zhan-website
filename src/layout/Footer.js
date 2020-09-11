import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{ height: "5%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#009688" }}>
        <div style={{ width: "100%" }}>
          <div className="footer">
            Designed by Sean Zhan |
            <a className="footer-resume" href="http://seanzhan.com/docs/Sean_Xiao_Zhan.pdf">Resume</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;