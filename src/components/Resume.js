import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo";
import '../styles/resume.css'

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <GeneralInfo
        general={this.props.general} />
        <EducationInfo
        education={this.props.education}
        removeEducationEntry={this.props.removeEducationEntry}/>
        <WorkInfo 
        experience={this.props.experience}
        removeWorkEntry={this.props.removeWorkEntry} />
      </div>
    );
  }
}

