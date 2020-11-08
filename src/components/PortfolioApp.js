import React from 'react';
import Header from './Header';
import IntroText from './IntroText';
import Projects from './Projects';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const PortfolioApp = () => (
      <div className="basic-info">
        <h1>Leo Carey-Williams</h1>
        <h3>Full Stack Web Developer</h3>
        <p>LinkedIn, Spotify, Github</p>
        <IntroText />
        <Footer />
      </div>
    )

export default PortfolioApp



