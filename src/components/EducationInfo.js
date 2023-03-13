import React, { Component } from 'react'

export class EducationInfo extends Component {
  render() {
    const edu = this.props.education;
    const styling = {
      border: 'solid 1px',
      backgroundColor: 'grey',
    }
    return (
      <div>
        <h2>Education</h2>
        {edu.map(item => {
          return (
            <div key={item.id} style={styling}>
              <p>Degree: {item.degree}</p>
              <p>University: {item.university}</p>
              <p>City: {item.city}</p>
              <p>Years Attended: {item.years}</p>
              <p>GPA: {item.gpa}</p>
              <button onClick={() => this.props.removeEducationEntry(item)} >delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default EducationInfo