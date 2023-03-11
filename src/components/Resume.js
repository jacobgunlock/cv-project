import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <h1>Resume</h1>
        <GeneralInfo general={this.props.general} />
        <EducationInfo education={this.props.education} />
      </div>
    );
  }
}
