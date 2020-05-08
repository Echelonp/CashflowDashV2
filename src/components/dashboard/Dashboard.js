import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="dashboard container">
        <p>Dashboard</p>
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

export default connect(mapStateToProps)(Dashboard);
