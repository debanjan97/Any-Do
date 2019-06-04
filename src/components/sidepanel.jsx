import React, { Component } from "react";

class SidePanel extends Component {
  state = {};
  stylePanel = {
    backgroundColor: "#cccccc",
    minHeight: "95vh",
    width: "20%",
    transition: "0.5s ease",
    display: "block"
  };
  styleNav = {
    marginTop: "10vh",
    padding: "0"
  };
  styleNavItems = {
    width: "100%",
    textAlignment: "center"
  };
  styleHead = {
    color: "blue"
  };
  styleInput = {
    width: "100%",
    backgroundColor: "inherit",
    textAlign: "center",
    fontSize: "20px"
  };
  styleLink = {
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "15%"
  };
  styleDeleteIcon = {
    fontSize: "20px",
    position: "absolute",
    right: "15%",
    width: "20%",
    textAlign: "right",
    marginBotton: "10px"
  };
  styleNames = {
    width: "85%"
  };
  handleEnter = () => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value === "") return;
      this.props.onEnter(event.target.value);
      event.target.value = "";
    }
  };

  handleClick = listName => {
    this.props.onListClick(listName);
  };
  handleDeleteList = listName => {
    this.props.deleteList(listName);
  };
  render() {
    return (
      <div id="side-panel" style={this.stylePanel}>
        <nav className="navbar navbar-light" style={this.styleNav}>
          <div className="navbar-nav" style={this.styleNavItems}>
            <a
              href="#"
              className="nav-item nav-link"
              onClick={() => this.handleClick("All Task")}
            >
              <h2 style={this.styleHead}>MY LIST</h2>
            </a>
            {this.props.param.lists.map(list => (
              <a
                href="#"
                key={list.id}
                className="nav-item nav-link"
                onClick={() => this.handleClick(list.name)}
                style={this.styleLink}
              >
                <div style={this.styleNames}>{list.name}</div>{" "}
                <i
                  style={this.styleDeleteIcon}
                  className="mdi mdi-delete"
                  onClick={() => this.handleDeleteList(list.name)}
                />
              </a>
            ))}
            <form action="" autoComplete="off">
              <input
                id="new-list-text"
                className="nav-item nav-link border-0"
                type="input"
                placeholder="+New List"
                style={this.styleInput}
                autoComplete="off"
                onKeyDown={this.handleEnter}
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default SidePanel;
