// @flow

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

type Props = any;

class App extends Component<Props> {
  _width: string = "abc";

  render() {
    this._width = "def";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>_width = {this._width}</p>
        </header>
      </div>
    );
  }
}

export default App;
