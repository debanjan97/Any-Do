import React, { Component } from "react";
import Card from "./card";

class CardArea extends Component {
  state = {};
  styleArea = {
    backgroundColor: "white",
    minHeight: "95vh",
    width: "100%",
    paddingLeft: "2%",
    paddingRight: "2%"
  };
  styleHeading = {
    fontWeight: "bold",
    margin: "0",
    marginTop: "50px",
    textAlign: "left"
  };

  render() {
    return (
      <div style={this.styleArea} className="">
        <h1 style={this.styleHeading}>{this.props.onDisplay}</h1>

        <div className="row" id="cardarea">
          {this.props.param.days.map(eachday => (
            <Card
              key={eachday.id}
              param={this.props.param}
              day={eachday.name}
              list={this.props.onDisplay}
              onEnter={this.props.onQuickAdd}
              assignTaskDay={this.props.assignTaskDay}
              toggleTask={this.props.toggleTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardArea;
