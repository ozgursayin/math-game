import React, { Component } from "react";
import Sum from "./Operations/Sum";
import Multiplication from "./Operations/Multiplication";
import Division from "./Operations/Division";
import Substract from "./Operations/Substraction";

import "./App.css";

class App extends Component {
  state = {
    score: 0,
    num1: 6,
    num2: 3,
    response: "",
    random: 1,
    incorrect: false,
    try: 0,
  };

  updateResponse = (event) => {
    this.setState({
      response: event.target.value,
    });
  };

  inputKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      const answer = parseInt(this.state.response);
      let number = Math.ceil(Math.random() * 10);
      let factor = Math.ceil(Math.random() * 10);
      let random = this.state.random;
      switch (random) {
        case 1:
          if (answer === this.state.num1 / this.state.num2) {
            this.setState((prevState) => ({
              score: prevState.score + 1,
              num1: number * factor,
              num2: number,
              response: "",
              incorrect: false,
              random: Math.ceil(Math.random() * 4),
              try: 0,
            }));
          } else {
            this.setState((prevState) => ({
              response: "",
              incorrect: true,
              try: prevState.try + 1,
            }));
          }
          break;
        case 2:
          if (answer === this.state.num1 * this.state.num2) {
            this.setState((prevState) => ({
              score: prevState.score + 1,
              num1: number * factor,
              num2: number,
              response: "",
              incorrect: false,
              random: Math.ceil(Math.random() * 4),
              try: 0,
            }));
          } else {
            this.setState((prevState) => ({
              response: "",
              incorrect: true,
              try: prevState.try + 1,
            }));
          }
          break;
        case 3:
          if (answer === this.state.num1 + this.state.num2) {
            this.setState((prevState) => ({
              score: prevState.score + 1,
              num1: number * factor,
              num2: number,
              response: "",
              incorrect: false,
              random: Math.ceil(Math.random() * 4),
              try: 0,
            }));
          } else {
            this.setState((prevState) => ({
              response: "",
              incorrect: true,
              try: prevState.try + 1,
            }));
          }
          break;
        case 4:
          if (answer === this.state.num1 - this.state.num2) {
            this.setState((prevState) => ({
              score: prevState.score + 1,
              num1: number * factor,
              num2: number,
              response: "",
              incorrect: false,
              random: Math.ceil(Math.random() * 4),
              try: 0,
            }));
          } else {
            this.setState((prevState) => ({
              response: "",
              incorrect: true,
              try: prevState.try + 1,
            }));
          }
          break;

        default:
          break;
      }
    }
  };

  renderMultiplication() {
    return (
      <div className="App rounded">
        <br />
        <span className="font-weight-bold">QUESTION:</span>
        <Multiplication
          num1={this.state.num1}
          num2={this.state.num2}
          response={this.state.response}
          incorrect={this.state.incorrect}
          onKeyPress={(e) => this.inputKeyPressHandler(e)}
          onChange={(e) => this.updateResponse(e)}
          try={this.state.try}
        />
        <hr />
        <h3>
          <br />
          <span className="font-weight-bold ">SCORE: {this.state.score}</span>
        </h3>
        <br />
        <br />
      </div>
    );
  }

  renderDivison() {
    return (
      <div className="App rounded">
        <br />
        <span className="font-weight-bold">QUESTION:</span>
        <Division
          num1={this.state.num1}
          num2={this.state.num2}
          response={this.state.response}
          incorrect={this.state.incorrect}
          onKeyPress={(e) => this.inputKeyPressHandler(e)}
          onChange={(e) => this.updateResponse(e)}
          try={this.state.try}
        />
        <hr />
        <h3>
          <br />
          <span className="font-weight-bold ">SCORE: {this.state.score}</span>
        </h3>

        <br />
        <br />
      </div>
    );
  }

  renderSummation() {
    return (
      <div className="App rounded">
        <br />
        <span className="font-weight-bold">QUESTION:</span>
        <Sum
          num1={this.state.num1}
          num2={this.state.num2}
          response={this.state.response}
          incorrect={this.state.incorrect}
          onKeyPress={(e) => this.inputKeyPressHandler(e)}
          onChange={(e) => this.updateResponse(e)}
          try={this.state.try}
        />
        <hr />
        <h3>
          <br />
          <span className="font-weight-bold ">SCORE: {this.state.score}</span>
        </h3>
        <br />
        <br />
      </div>
    );
  }

  renderSubstraction() {
    return (
      <div className="App rounded">
        <br />
        <span className="font-weight-bold">QUESTION:</span>
        <Substract
          num1={this.state.num1}
          num2={this.state.num2}
          response={this.state.response}
          incorrect={this.state.incorrect}
          onKeyPress={(e) => this.inputKeyPressHandler(e)}
          onChange={(e) => this.updateResponse(e)}
          try={this.state.try}
        />
        <hr />
        <h3>
          <br />
          <span className="font-weight-bold ">SCORE: {this.state.score}</span>
        </h3>
        <br />
        <br />
      </div>
    );
  }

  render() {
    if (this.state.random === 1) {
      return this.renderDivison();
    } else if (this.state.random === 2) {
      return this.renderMultiplication();
    } else if (this.state.random === 3) {
      return this.renderSummation();
    } else if (this.state.random === 4) {
      return this.renderSubstraction();
    } else {
      return null;
    }
  }
}

export default App;
