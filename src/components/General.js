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
      userData: "",
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
    const { firstName, lastName, address, email, phoneNumber } = this.state;
    const data = (
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    );
    this.setState({ userData: data });
  };

  render() {
    const { firstName, lastName, address, email, phoneNumber } = this.state;
    return (
      <div>
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
            type="text"
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
        <div>
          <h2>User Data:</h2>
          {this.state.userData}
        </div>
      </div>
    );
  }
}
