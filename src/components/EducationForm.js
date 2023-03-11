import React, { Component } from 'react'

export class EducationForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      entries: [],
      entry: {
        degree: '',
        university: '',
        city: '',
        years: '',
        gpa: '',
      }
    }
  }
  render() {
    return (
      <div>
        <h3>Education Form</h3>
        {/* inputs TODO */}

        
      </div>
    )
  }
}

export default EducationForm