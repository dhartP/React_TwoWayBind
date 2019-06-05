import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "one way bind"
  };

  changeName = newName => {
    this.setState({
      name: newName
    });
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        {/* <button
          onClick={this.changeName.bind(this, "Change by clicking button")}
        >
          Change using Bind
        </button> */}
        {/* two way binding */}
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
