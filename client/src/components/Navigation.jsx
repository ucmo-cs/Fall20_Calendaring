import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div classname="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Calendaring App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li
                  class={`nav-item ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                  >
                    <Link class="nav-link" to="/">
                      Home
                      <span class="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li
                  class={`nav-item ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                  >
                    <Link class="nav-link" to="/new-account">
                      New Account
                    </Link>
                  </li>
                  <li
                  class={`nav-item ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                  >
                    <Link class="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li
                  class={`nav-item ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                  >
                    <Link class="nav-link" to="/share-calendar">
                      Share Calendar
                    </Link>
                  </li>
                  <li
                  class={`nav-item ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                  >
                    <Link class="nav-link" to="/calendar">
                      Calendar
                    </Link>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
