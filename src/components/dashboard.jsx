import React, { Component } from "react";
import SidePanel from "./sidepanel";
import CardArea from "./cardarea";

class Dashboard extends Component {
  state = {
    heading: "All Task"
  };
  styleDash = {
    minHeight: "95vh",
    display: "flex",
    flexDirection: "row"
  };
  handleClick = listName => {
    this.setState({ heading: listName });
  };
  render() {
    return (
      <div id="dashboard" style={this.styleDash}>
        <SidePanel
          param={this.props.param}
          onEnter={this.props.onTextEnter}
          onListClick={this.handleClick}
          deleteList={this.props.deleteList}
        />
        <CardArea
          param={this.props.param}
          onDisplay={this.state.heading}
          onQuickAdd={this.props.onQuickAdd}
          assignTaskDay={this.props.assignTaskDay}
          toggleTask={this.props.toggleTask}
        />
      </div>
    );
  }
}

export default Dashboard;
