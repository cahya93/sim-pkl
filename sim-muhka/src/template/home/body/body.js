import { Home, Juknis, Login } from "../../../page";
import "./body.css";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
class body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="body">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/juknis">
            <Juknis />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default body;
