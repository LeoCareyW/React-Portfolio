import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import PortfolioApp from './components/PortfolioApp';
import Projects from './components/Projects';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={PortfolioApp} exact={true}/>
      <Route path="/projects" component={Projects} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));
