// App.js
import React, { Component } from "react";
import style from "./styles/style.module.css";
import Resume from "./components/Resume";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";

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

  handleEducationData = (data) => {
    this.setState({ education: this.state.education.concat(data) });
  };

  handleWorkData = (data) => {
    this.setState({ experience: this.state.experience.concat(data) });
  };

  removeEducationEntry = (entryToDelete) => {
    this.setState({
      education: this.state.education.filter(
        (entry) => entry.id !== entryToDelete.id
      ),
    });
  };

  removeWorkEntry = (entryToDelete) => {
    this.setState({
      experience: this.state.experience.filter(
        (entry) => entry.id !== entryToDelete.id
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <GeneralForm handleGeneralData={this.handleGeneralData} />
        <EducationForm
          education={this.state.education}
          handleEducationData={this.handleEducationData}
        />
        <WorkForm
          experience={this.state.experience}
          handleWorkData={this.handleWorkData}
        />
        <Resume
          general={this.state.general}
          education={this.state.education}
          experience={this.state.experience}
          removeEducationEntry={this.removeEducationEntry}
          removeWorkEntry={this.removeWorkEntry}
        />
      </div>
    );
  }
}
