import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav>
        <div className="grey darken-3 black-text text-lighten-5 nav-wrapper">
          <div>
            <div>
              <Link to="/" className="brand-logo">
                {/* กระแสเงินสด */}
              </Link>
            </div>

            <ul className="right">
              <li>
                <Link to="/daychart">กระแสเงินสดรายวัน</Link>
              </li>
              <li>
                <Link to="/">นำเข้าข้อมูล</Link>
              </li>
            </ul>
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
