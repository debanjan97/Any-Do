import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@mdi/font/css/materialdesignicons.css";
import Dashboard from "./components/dashboard";
import Modal from "./components/modal";

class App extends Component {
  state = {
    lists: [
      { id: 0, name: "Personal" },
      { id: 1, name: "Grocery" },
      { id: 2, name: "Work" },
      { id: 3, name: "Gym" },
      { id: 4, name: "Swimming" }
    ],
    days: [
      { id: 0, name: "Today" },
      { id: 1, name: "Tomorrow" },
      { id: 2, name: "Someday" },
      { id: 3, name: "Upcoming" }
    ],
    tasks: [
      {
        id: 0,
        name: "Deadlift",
        list: "Gym",
        day: "Today",
        display: 1,
        class: "present"
      },
      {
        id: 1,
        name: "Buy Curd",
        list: "Grocery",
        day: "Tomorrow",
        display: 1,
        class: "present"
      },
      {
        id: 2,
        name: "Cleaning",
        list: "Personal",
        day: "Someday",
        display: 1,
        class: "present"
      },
      {
        id: 3,
        name: "Learn React",
        list: "Work",
        day: "Upcoming",
        display: "1",
        class: "present"
      },
      {
        id: 4,
        name: "Benchpress",
        list: "Gym",
        day: "Today",
        display: 1,
        class: "present"
      },
      {
        id: 5,
        name: "Butterfly",
        list: "Swimming",
        day: "Today",
        display: 1,
        class: "present"
      },
      {
        id: 6,
        name: "Backstroke",
        list: "Swimming",
        day: "Tomorrow",
        display: 1,
        class: "present"
      },
      {
        id: 7,
        name: "Water Kicking",
        list: "Swimming",
        day: "Upcoming",
        display: 1,
        class: "present"
      },
      {
        id: 8,
        name: "Deep Diving",
        list: "Swimming",
        day: "Someday",
        display: 1,
        class: "present"
      }
    ]
  };

  handleAddList = name => {
    let lists = this.state.lists.map(function(list) {
      return list;
    });
    lists.push({ id: this.state.lists.length, name: name });
    this.setState({ lists });
  };
  handleAddTask = (name, list, day) => {
    let tasks = this.state.tasks.map(function(task) {
      return task;
    });
    tasks.push({
      id: tasks.length,
      name: name,
      list: list,
      day: day,
      display: 1,
      class: "present"
    });
    this.setState({ tasks });
  };
  handleQuickAdd = (name, list, day) => {
    this.handleAddTask(name, list, day);
  };

  handleDragDrop = (taskName, day) => {
    let tasks = this.state.tasks.map(function(task) {
      if (task.name === taskName) {
        task.day = day;
      }
      return task;
    });
    this.setState({ tasks });
  };

  handleToggleTask = taskName => {
    let tasks = this.state.tasks.map(function(task) {
      if (task.name === taskName) {
        task.display = 1 - task.display;
      }
      return task;
    });
    //tasks = tasks.filter(task => task.display !== 0);
    this.setState({ tasks });
  };

  handleDeleteList = listName => {
    let lists = this.state.lists.filter(list => list.name !== listName);
    let tasks = this.state.tasks.filter(task => task.list !== listName);
    this.setState({ lists, tasks });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Dashboard
          param={this.state}
          onTextEnter={this.handleAddList}
          onQuickAdd={this.handleQuickAdd}
          assignTaskDay={this.handleDragDrop}
          toggleTask={this.handleToggleTask}
          deleteList={this.handleDeleteList}
        />
        <Modal param={this.state} onAddTask={this.handleAddTask} />
      </React.Fragment>
    );
  }
}

export default App;
