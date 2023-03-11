import React, { Component } from "react";

export class GeneralInfo extends Component {
  render() {
    const { general } = this.props;
    return (
      <div>
        <div>
          <h2>General</h2>
          <p>{general.firstName}</p>
          <p>{general.lastName}</p>
          <p>{general.address}</p>
          <p>{general.email}</p>
          <p>{general.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
