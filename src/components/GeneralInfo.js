import React, { Component } from "react";

export class GeneralInfo extends Component {
  render() {
    const { userData } = this.props.userData;
    return (
      <div>
        <div>
          <h1>Resume</h1>
          <p>{userData.firstName}</p>
          <p>{userData.lastName}</p>
          <p>{userData.address}</p>
          <p>{userData.email}</p>
          <p>{userData.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
