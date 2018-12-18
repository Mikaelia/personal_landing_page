import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import ResumePage from "../components/ResumePage/ResumePage";
import MainApp from "./MainApp";

import "../sass/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={MainApp} />
            <Route path="/resume" component={ResumePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
