import React, { Component } from 'react'

export default class WorkInfo extends Component {
  render() {
    const work = this.props.experience;
    const styling = {
      border: 'solid 1px',
      backgroundColor: 'light-grey',
    }
    return (
      <div>
        <h2>Work Experience</h2>
        {work.map(item => {
          return (
          <div key={item.id} style={styling}>
            <p>Job Title: {item.title}</p>
            <p>Company: {item.company}</p>
            <p>Period Employed: {item.periodEmployed}</p>
            <p>Responsibilities: <br/> {item.responsibilities}</p>
            <button onClick={() => this.props.removeWorkEntry(item)}>delete</button>
          </div>
          )
        })}
      </div>
    )
  }
}

