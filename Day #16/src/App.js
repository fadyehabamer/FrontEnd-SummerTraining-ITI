import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ListStd from "./ListStd";
import AddStd from "./AddStd";
import EditStd from "./EditStd";
import "./App.css"

export default class AppRouter extends React.Component {
  state = {
    StudentList: [

    ],
  };
  render() {
    return (
      <Router>
        <Route
          path="/"
          component={(props) => (
            <ListStd {...props} Students={this.state.StudentList} />
          )}
          exact
        />

        <Route
          path="/List"
          component={(props) => (
            <ListStd {...props} Students={this.state.StudentList} />
          )}
          exact
        />

        <Route path="/AddStudent" component={AddStd} />
        <Route path="/EditStudent" component={EditStd} />
      </Router>
    );
  }
}

