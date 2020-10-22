import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';

class Projects extends React.Component {



  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <Project
          name='Project 1'
          language="react"
        />
        <Project
          name='Project 2'
          language="react"
        />
        <Project
          name='Project 3'
          language="ruby"
        />
      </div>
    );
  }
}

export default Projects
