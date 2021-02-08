import React, {useState} from 'react';
import { AllProjects } from '../Projects/project.utils';
import "./ViewProject.styles.scss"

const ViewProject = ({ location }) => {
  const projectToView = JSON.parse(location.state.project)
  // console.log("PROJECT PROPS", projectToView.functionalities[0].props.children)
  // console.log("PROJECT PROPS", Object.values(projectToView.functionalities))

  return (
    <div className="ViewProjectContainer">
      <div className="mainTitleContainer">
        <h2 className="title mainTitle mainHeadin">{projectToView.name}</h2>
      </div>
      <div className="Images">
        {projectToView.images.map((link) => 
          <div className="Image">
            <img alt="" src={`images/${link}`}/>
          </div>
        )}
      </div>
      <div className="Functionalities SectionHeading">
        <h3>Functionalities</h3>
        {projectToView.functionalities.map((functionality) => 
          <div className="listItem">
            <p className="point" >&#9679;</p>
            <p>{functionality.props.children}</p>
          </div>
        )}
      </div>
      <div className="StackContainer SectionHeading">
        <h3 className="">Tech Stack :</h3>
        <div className="Stacks">
          {
            projectToView.stack.map(({icon, name }) => (
              <div className="skill">
                <div className="icon">
                  <img alt="" src={icon}/>
                </div>
                <p className="name">{name}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="Buttons">
        {projectToView.demoLink && <a href={projectToView.demoLink} target="__blank" className="demo">View Demo</a>}
        {projectToView.realLink && <a href={projectToView.realLink} target="__blank" className="real">View Live</a>}
      </div>
    </div>
  );
}

export default ViewProject;

