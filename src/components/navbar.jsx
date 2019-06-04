import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  styleAddButton = {
    borderRadius: "30px",
    width: "120px",
    marginLeft: "60px",
    marginRight: "15px",
    fontSize: "20px",
    paddingTop: "0",
    paddingBottom: "0"
  };
  styleSearch = {
    fontSize: "20px"
  };
  styleForm = {
    position: "absolute",
    right: "10px"
  };
  styleNav = {
    flexDirection: "row"
  };
  handleClick = () => {
    let modal = document.getElementById("add-modal");
    modal.style.display = "block";
    modal.style.opacity = "1";
  };
  handleToggle = () => {
    const sidePanel = document.getElementById("side-panel");
    let displayStatus = sidePanel.style.display;
    if (displayStatus === "block") {
      sidePanel.style.display = "none";
    } else {
      sidePanel.style.display = "block";
    }
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-nav" style={this.styleNav}>
          <a className="nav-item nav-link" onClick={this.handleToggle}>
            <span>
              <span className="navbar-toggler-icon" />
            </span>
          </a>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={this.styleAddButton}
            onClick={this.handleClick}
          >
            + &nbsp; New
          </button>
          <form className="form-inline" style={this.styleForm}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for tasks, list etc.."
              aria-label="Search"
            />
            <button
              className="mdi mdi-magnify btn btn-outline-primary"
              type="submit"
              style={this.styleSearch}
            />
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
