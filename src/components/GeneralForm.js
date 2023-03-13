// GeneralForm.js
import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleGeneralData(this.state);
  };

  render() {
    const { firstName, lastName, address, email, phoneNumber } = this.state;
    return (
      <div>
        <h3>General Form</h3>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => this.onChange(e)}
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => this.onChange(e)}
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            name="address"
            value={address}
            onChange={(e) => this.onChange(e)}
            type="address"
            placeholder="Address"
            required
          />
          <input
            name="email"
            value={email}
            onChange={(e) => this.onChange(e)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => this.onChange(e)}
            type="tel"
            placeholder="Phone Number"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
