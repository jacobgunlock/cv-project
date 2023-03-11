import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <div>
      <GeneralInfo userData={this.props}/>
    </div>;
  }
}
