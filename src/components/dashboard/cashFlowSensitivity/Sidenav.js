import React, { Component } from "react";
import { connect } from "react-redux";

class Sidenav extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col s12">
          This div is 12-columns wide on all screen sizes
        </div>
        <div className="col s12 m6">
          This div is 12-columns wide on all screen sizes
        </div>
        <div className="col s12 m6">
          This div is 12-columns wide on all screen sizes
        </div>
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

export default connect(mapStateToProps)(Sidenav);
