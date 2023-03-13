import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";

export default class Resume extends Component {
  render() {
    const styling = {
      border: 'solid 1px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
    }
    
    return (
      <div style={styling}>
        <h1>Resume</h1>
        <GeneralInfo general={this.props.general} />
        <EducationInfo education={this.props.education} />
      </div>
    );
  }
}

