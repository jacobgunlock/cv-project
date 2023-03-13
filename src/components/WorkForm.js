import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: {
        title: "",
        company: "",
        periodEmployed: "",
        responsibilities: "",
        id: uuidv4(),
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.experience.length < 3) {
      this.props.handleWorkData(this.state.entry);
      this.setState({
        entry: {
          title: "",
          company: "",
          periodEmployed: "",
          responsibilities: "",
          id: uuidv4(),
        },
      });
    } else return alert("Only 3 Entries Allowed");
  };

  onChange = (e) => {
    this.setState((prevState) => ({
      entry: {
        ...prevState.entry,
        [e.target.name]: e.target.value,
      },
    }));
  };

  render() {
    const textAreaStyle = {
      resize: "none",
      height: "4rem",
    };
    const { title, company, periodEmployed, responsibilities } =
      this.state.entry;
    return (
      <div>
        <h3>Work Experience Form</h3>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            value={title}
            name="title"
            type="text"
            placeholder="Job Title"
          />
          <input
            onChange={(e) => this.onChange(e)}
            value={company}
            name="company"
            type="text"
            placeholder="Company"
          />
          <input
            onChange={(e) => this.onChange(e)}
            value={periodEmployed}
            name="periodEmployed"
            type="text"
            placeholder="Period Employed"
          />
          <textarea
            onChange={(e) => this.onChange(e)}
            value={responsibilities}
            name="responsibilities"
            style={textAreaStyle}
            type="text"
            placeholder="Resposibilities"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
