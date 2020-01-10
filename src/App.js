import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from './Containers/Movies';
import Header from "./Components/Header/Header";
import "./App.scss";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Movies />
      </div>
    );
  }
}

const mapStateToProps = ({movies}) => {
  return {
   movies
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
