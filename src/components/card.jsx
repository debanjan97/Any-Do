import React, { Component } from "react";

class Card extends Component {
  state = {
    heading: this.props.day
  };
  styleDiv = {
    height: "500px",
    backgroundColor: "#d7e3f7",
    margin: "20px"
  };
  styleHeading = {
    marginTop: "10px"
  };
  styleInputField = {
    width: "100%",
    height: "50px",
    fontSize: "20px",
    position: "absolute",
    bottom: 0,
    left: 0,
    border: "none"
  };
  handleEnter = () => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value === "") return;
      this.props.onEnter(
        event.target.value,
        this.props.list,
        this.state.heading
      );
      event.target.value = "";
    }
  };
  handleStart = task => {
    event.dataTransfer.setData("Text", JSON.stringify(task));
  };

  handleDrop = day => {
    event.preventDefault();
    let task = JSON.parse(event.dataTransfer.getData("Text"));
    this.props.assignTaskDay(task.name, day);
  };

  allowDrop = () => {
    event.preventDefault();
  };
  handleToggle = task => {
    this.props.toggleTask(task.name);
  };

  render() {
    var tasks = this.props.param.tasks.filter(
      task =>
        task.day === this.props.day &&
        (task.list === this.props.list || this.props.list === "All Task")
    );
    tasks = tasks.map(function(task) {
      let classToBeAssigned = "nav-item nav-link tasks ";
      if (task.display === 0) {
        classToBeAssigned += "past";
      } else {
        classToBeAssigned += "present";
      }
      task.class = classToBeAssigned;
      return task;
    });
    return (
      <div
        className="col cards"
        style={this.styleDiv}
        onDrop={() => this.handleDrop(this.state.heading)}
        onDragOver={this.allowDrop}
      >
        <h2 style={this.styleHeading}>{this.state.heading}</h2>
        {tasks.map(task => (
          <a
            key={task.id}
            href="#"
            className={task.class}
            draggable
            onDragStart={() => this.handleStart(task)}
            onClick={() => this.handleToggle(task)}
          >
            {task.name}
          </a>
        ))}
        <div>
          <input
            id="new-task-input"
            placeholder=" Add Task Quickly.."
            style={this.styleInputField}
            autoComplete="off"
            onKeyDown={this.handleEnter}
          />
        </div>
      </div>
    );
  }
}

export default Card;
