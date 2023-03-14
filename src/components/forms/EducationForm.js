import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export default class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: {
        degree: "",
        university: "",
        city: "",
        state: "",
        years: "",
        id: uuidv4(),
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.education.length < 3) {
      this.props.handleEducationData(this.state.entry);
      this.setState({ 
        entry: {
          degree: '',
          university: '',
          city: '',
          state: '',
          years: '',
          id: uuidv4(),
        }
      })
    } else return alert('Only 3 Entries Allowed');
  }

  onChange = (e) => {
    this.setState(prevState => ({
      entry: {
        ...prevState.entry,
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h3>Education Form</h3>
          <input
            name="degree"
            type="text"
            placeholder="Degree"
            value={this.state.entry.degree}
            onChange={(e) => this.onChange(e)}
          />
          <input
            name="university"
            type="text"
            placeholder="University"
            value={this.state.entry.university}
            onChange={(e) => this.onChange(e)}
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            value={this.state.entry.city}
            onChange={(e) => this.onChange(e)}
          />
          <input
            name="state"
            type="text"
            placeholder="State"
            value={this.state.entry.state}
            onChange={(e) => this.onChange(e)}
          />
          <input
            name="years"
            type="text"
            placeholder="Years"
            value={this.state.entry.years}
            onChange={(e) => this.onChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
