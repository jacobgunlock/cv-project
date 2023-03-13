import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export default class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      entry: {
        degree: "",
        university: "",
        city: "",
        years: "",
        gpa: "",
        id: uuidv4(),
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.entries.length < 3) {

      this.setState({ 
        entries: this.state.entries.concat(this.state.entry),
        entry: {
          degree: '',
          university: '',
          city: '',
          years: '',
          gpa: '',
          id: uuidv4(),
        }
      }, () => {
        this.props.handleEducationData(this.state.entries)
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
            name="years"
            type="text"
            placeholder="Years"
            value={this.state.entry.years}
            onChange={(e) => this.onChange(e)}
          />
          <input
            name="gpa"
            type="text"
            placeholder="GPA"
            value={this.state.entry.gpa}
            onChange={(e) => this.onChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
