import React, { Component } from 'react'
import '../styles/work.css'

export default class WorkInfo extends Component {
  render() {
    const work = this.props.experience;
    return (
      <div className='work'>
        <h2>Work Experience</h2>
        {work.map(item => {
          return (
          <div key={item.id}>
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

