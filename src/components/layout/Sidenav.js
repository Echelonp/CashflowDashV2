import React from "react";

function Sidenav() {
  return (
    <div>
      <nav>
        {" "}
        <p>Test</p>{" "}
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <a href="#!">
            <i className="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
  );
}
