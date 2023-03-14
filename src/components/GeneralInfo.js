import React, { Component } from "react";
import '../styles/general.css'

export class GeneralInfo extends Component {
  render() {
    const { general } = this.props;

    return (
      <div className="general">
        <div className="heading">
          <h1>
            {general.firstName} {general.lastName}
          </h1>
          <h2>{general.title}</h2>
        </div>
        <div className="info">
          <p>Phone | {general.phoneNumber}</p>
          <p>Address | {general.address}</p>
          <p>Email | {general.email}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
