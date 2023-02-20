import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashMain">
        <div>
          <header>
            <h1>Dashboard Header</h1>
            <body>
              <div>
                <h1>Hello World!</h1>
              </div>
              <div>
                <div>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">SignIn</Link></li>
                <li><Link to="/video">Video</Link></li>
                </div>
                {/* <div>
                <Link to="/login">Login</Link>
                <br />
                <Link to="/register">SignIn</Link>
                <br />
                <Link to="/video">Video</Link>
                </div> */}
              </div>
            </body>
          </header>
        </div>
      </div>
    )
  }
}
