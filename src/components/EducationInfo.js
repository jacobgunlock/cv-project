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
              <p>{item.degree}</p>
              <p>{item.university}</p>
              <p>{item.city}</p>
              <p>{item.years}</p>
              <p>{item.gpa}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default EducationInfo