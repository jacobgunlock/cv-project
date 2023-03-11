// App.js
import React, { Component } from "react";
import style from "./styles/style.module.css";
import Resume from "./components/Resume";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      general: "",
      education: [],
      experience: [],
    };
  }

  handleGeneralData = (data) => {
    this.setState({ general: data });
  };

  render() {
    return (
      <div className="App">
        <GeneralForm handleGeneralData={this.handleGeneralData} />
        <EducationForm />
        <Resume
          general={this.state.general}
          education={this.state.education}
          experience={this.state.experience}
        />
      </div>
    );
  }
}
