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

  handleChange = (e) => {
    switch (e.target.placeholder) {
      case "First Name":
        this.setState({ firstName: e.target.value });
        break;
      case "Last Name":
        this.setState({ lastName: e.target.value });
        break;
      case "Address":
        this.setState({ address: e.target.value });
        break;
      case "Email":
        this.setState({ email: e.target.value });
        break;
      case "Phone Number":
        this.setState({ phoneNumber: e.target.value });
        break;
      default:
        break;
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleUserData(this.state);
  };

  render() {
    const { firstName, lastName, address, email, phoneNumber } = this.state;
    return (
      <div>
        <h3>General Info</h3>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <input
            value={firstName}
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="First Name"
            required
          />
          <input
            value={lastName}
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Last Name"
            required
          />
          <input
            value={address}
            onChange={(e) => this.handleChange(e)}
            type="address"
            placeholder="Address"
            required
          />
          <input
            value={email}
            onChange={(e) => this.handleChange(e)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={phoneNumber}
            onChange={(e) => this.handleChange(e)}
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
