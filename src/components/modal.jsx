import React, { Component } from "react";

class Modal extends Component {
  state = {};
  styleModal = {
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "none",
    opacity: "0",
    display: "none",
    transition: "0.5s ease-in"
  };
  styleContent = {
    position: "relative",
    top: "20vh",
    height: "50vh",
    width: "50vw",
    backgroundColor: "#e3e3e3",
    borderRadius: "10px",
    border: "1px solid blue"
  };
  styleFormDiv = {
    width: "60%",
    backgroundColor: "#e3e3e3",
    height: "100%"
  };

  styleListDiv = {
    width: "35%",
    backgroundColor: "#e3e3e3",
    marginLeft: "5%",
    height: "100%"
  };
  styleButton = {
    position: "absolute",
    width: "50vw",
    bottom: -1,
    left: -1,
    overflow: "hidden",
    borderRadius: "0",
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none"
  };

  styleFlex = {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: "90%"
  };

  styleInput = {
    width: "90%",
    marginTop: "60px",
    height: "60px",
    fontSize: "40px"
  };
  styleHeading = {
    textAlign: "left",
    marginTop: "40px"
  };

  styleSelect = {
    position: "absolute",
    width: "45%",
    height: "45px",
    fontSize: "25px",
    marginTop: "0px",
    left: 0
  };
  styleOptions = {
    marginTop: "40px",
    textAlign: "left",
    fontSize: "20px"
  };
  styleCross = {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: +2,
    fontSize: "20px"
  };
  componentDidMount() {
    let modal = document.getElementById("add-modal");
    modal.style.transtion = "0.5s ease";
  }
  handleClick = () => {
    event.preventDefault();
    const taskName = document.getElementById("task-input").value;
    const days = document.getElementsByClassName("radio-options");
    var day = null;
    for (var i = 0; i < days.length; i++) {
      if (days.item(i).checked) {
        day = days.item(i).value;
        break;
      }
    }
    const drop = document.getElementById("lists");
    const list = drop.options[drop.selectedIndex].value;
    this.props.onAddTask(taskName, list, day);
    let modal = document.getElementById("add-modal");
    modal.style.display = "none";
    modal.style.opacity = "0";
  };
  handleCross = () => {
    let modal = document.getElementById("add-modal");
    modal.style.display = "none";
    modal.style.opacity = "0";
  };
  render() {
    return (
      <div id="add-modal" className="" style={this.styleModal}>
        <div id="modal-content" className="container" style={this.styleContent}>
          <div
            className="mdi mdi-window-close"
            style={this.styleCross}
            onClick={this.handleCross}
          />
          <div className="" style={this.styleFlex}>
            <div id="modal-form" style={this.styleFormDiv}>
              <input
                id="task-input"
                type="text"
                placeholder="I want too..."
                className="form-control"
                style={this.styleInput}
              />
              <h2 style={this.styleHeading}>Lists:</h2>
              <select style={this.styleSelect} className="dropdown" id="lists">
                {this.props.param.lists.map(list => (
                  <option value={list.name}>{list.name}</option>
                ))}
              </select>
            </div>
            <div id="modal-list" style={this.styleListDiv}>
              <h3 style={this.styleHeading}>Remind Me:</h3>
              <div id="radio-options" style={this.styleOptions}>
                {this.props.param.days.map(day => (
                  <div key={day.id}>
                    <input
                      type="radio"
                      className="radio-options"
                      value={day.name}
                    />
                    {day.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-primary btn-lg"
            style={this.styleButton}
            onClick={this.handleClick}
          >
            Add Task
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
