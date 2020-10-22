import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import AboutPage from '../components/About';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioApp from '../components/PortfolioApp';
import Projects from '../components/Projects';
import Project from '../components/Project';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PortfolioApp} exact={true}/>
        <Route path="/projects" component={Projects} />
        <Route path="/project" component={Project} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route component={NotFoundPage}  />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
