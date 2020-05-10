import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav>
          <p>Test</p>
        </nav>
        <br></br>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("MapState", state);
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Navbar);
