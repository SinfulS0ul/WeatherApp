import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
    render() {
      return (
        <div className="description">
          <p>It's Weather App on React</p>
          <p>Tech Stack: </p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Router</li>
          </ul>
          <a href="https://www.facebook.com/groups/270300106928894/">Front-end camp “Facebook” page</a>
        </div>
      );
    }
}

export default Description;