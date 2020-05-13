import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav>
        <div className="grey darken-3 black-text text-lighten-5 nav-wrapper">
          <div className="container left-align">
            <a className="brand-logo">
              <span>กระแสเงินสด</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("MapState", state);
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Navbar);
