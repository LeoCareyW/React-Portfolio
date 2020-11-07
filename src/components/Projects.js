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
      showReact: false,
      showReactNative: false
    };
  }

  handleAllClick() {
    this.setState(() => {
      return {
        showAll: true,
        showReact: false,
        showRuby: false,
        showReactNative: false
      };
    });
  }

  handleReactClick() {
    this.setState(() => {
      return {
        showAll: false,
        showReact: true,
        showRuby: false,
        showReactNative: true
      };
    });
  }

  handleRubyClick() {
    this.setState(() => {
      return {
        showAll: false,
        showRuby: true,
        showReact: false,
        showReactNative: false
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
        <button> onClick={this.handleReactClick}>React Native</button>
        <h3> Note that react and react native projects overlap in many cases</h3>

        <div className="projects-grid">
            {(this.state.showAll || this.state.showReact) && <Project
              name='Expensise'
              language='react'
              description='Lorem ipsum'
            />
            }
            {(this.state.showAll || this.state.showReact) && <Project
              name='Indecision'
              language='react'
              description='lorem ipsum description of project 2'
            />
            }
            {(this.state.showAll || this.state.showRuby) && <Project
              name='Material Matters'
              language='ruby'
              description='lorem ipsum second description'
            />
            }
            {(this.state.showAll || this.state.showRuby) && <Project
              name='Socialite'
              language='ruby'
              description='lorem ipsum fourth description'
            />
            }
            {(this.state.showAll || this.state.showReact) && <Project
              name='Yelp API'
              language='react'
              description='lorem ipsum description of project 2'
            />
            }
            {(this.state.showAll || this.state.showRuby) && <Project
              name='Pad'
              language='ruby'
              description='lorem ipsum fifth description'
            />
            }
            {(this.state.showAll || this.state.showRuby) && <Project
              name='Susso'
              language='ruby'
              description='lorem ipsum sixth description'
            />
            }
      </div>
    </div>
    );
  }
}

export default Projects
