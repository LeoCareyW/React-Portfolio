import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleReactClick = this.handleReactClick.bind(this);
    this.handleRubyClick = this.handleRubyClick.bind(this);
    this.state = {
      showAll: true,
      showRuby: false,
      showReact: false
    };
  }

  handleAllClick() {
    this.setState(() => {
      return {
        showAll: true,
        showReact: false,
        showRuby: false
      };
    });
  }

  handleReactClick() {
    this.setState(() => {
      return {
        showAll: false,
        showReact: true,
        showRuby: false
      };
    });
  }

  handleRubyClick() {
    this.setState(() => {
      return {
        showAll: false,
        showRuby: true,
        showReact: false
      };
    });
  }


  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <button onClick={this.handleAllClick}>All</button>
        <button onClick={this.handleRubyClick}>Ruby</button>
        <button onClick={this.handleReactClick}>React</button>

        {(this.state.showAll || this.state.showReact) && <Project
          name='Project 1'
          language="react"
        />
      }

        {(this.state.showAll || this.state.showReact) && <Project
          name='Project 2'
          language="react"
        />
      }

        {(this.state.showAll || this.state.showRuby) && <Project
          name='Project 3'
          language="ruby"
        />
      }
      </div>
    );
  }
}

export default Projects
