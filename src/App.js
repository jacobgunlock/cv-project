// App.js
import React, { Component } from "react";
import style from "./styles/style.module.css";
import Resume from "./components/Resume";
import GeneralForm from "./components/GeneralForm";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: '',
    };

    this.handleUserData = this.handleUserData.bind(this);
  }

  handleUserData = (data) => {
    this.setState({ userData: data })
  }

  render() {
    return (
      <div className="App">
        <GeneralForm handleUserData={this.handleUserData}/>
        <Resume userData={this.state.userData}/>
      </div>
    );
  }
}

