import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import PDFViewer from "../components/PDFViewer";
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
            <Route path="/resume" component={PDFViewer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
