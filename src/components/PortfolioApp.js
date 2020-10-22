import React from 'react';
import Header from './Header';
import IntroText from './IntroText';
import Projects from './Projects';
import { Link } from 'react-router-dom';


const PortfolioApp = () => (
      <div>
        <h1>Leo Carey-Williams</h1>
        <h3>Full Stack Web Developer</h3>
        <p>LinkedIn, Spotify, Github</p>
        <IntroText />
      </div>
    )

export default PortfolioApp
