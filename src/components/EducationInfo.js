import React, { Component } from "react";
import "../styles/education.css";

export class EducationInfo extends Component {
  render() {
    const edu = this.props.education;
    return (
      <div className="education">
        <h2>Education</h2>
        {edu.map((item) => {
          return (
            <div key={item.id} className={"info"}>
              <p>{item.degree}, {item.university}</p>
              <p>{item.city}, {item.state}</p>
              <p>{item.years}</p>
              <button onClick={() => this.props.removeEducationEntry(item)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EducationInfo;
