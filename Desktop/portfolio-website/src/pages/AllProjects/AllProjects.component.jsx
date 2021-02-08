import React from 'react';
import "./AllProjects.styles.scss";
import Projects from '../../components/Projects/Projects.component';

const AllProjects = () => {
  return (
    <div className="allProjectsContainer">
      <div></div>
      <Projects showBackLink={false} limit={false}/>
    </div>
  );
}

export default AllProjects;
