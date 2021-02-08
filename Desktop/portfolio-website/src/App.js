import React from 'react';
import './sass/main.scss';
import './App.scss';
import AboutMe from './components/AboutMe/AboutMe.component';
import { Route, Switch } from 'react-router-dom';
import AllProjects from './pages/AllProjects/AllProjects.component';
import Contents from './pages/Contents/Contents.component';
import ViewProject from './components/ViewProject/ViewProject.component';

const App = () => {
  return (
    <div className="homepageContainer">
      <div className="homepage">
        <AboutMe/>
        <Switch>
          <Route exact path='/' component={Contents} />
          <Route exact path='/projects' component={AllProjects} />
          <Route exact path='/project-details' component={ViewProject} />
        </Switch>
      </div>
      <div className="footer">
        <p className="">© 2020, This website design belongs to <a href="https://ebukab.com" className="footerBoldText">  Ebuka Beluolisa</a>.</p>
      </div>
    </div>
  );
}

export default App;
