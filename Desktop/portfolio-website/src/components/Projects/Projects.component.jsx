import React, {useState} from 'react';
import "./Projects.styles.scss";
import { ProjectTypes, AllProjects } from './project.utils';
import { ALLSKILLS } from '../../utilities/skills';
import ViewProject from '../ViewProject/ViewProject.component';
import { SkillTypes } from '../Skills/skills';
import { Link } from 'react-router-dom';

const Projects = ({limit, history}) => {
  const [selectedproject, setSelectedproject] = useState("Featured");
  const [projectToView, setProjectToView] = useState(null);


  return (
    <div className="ProjectComponent">
      <div className="mainTitleContainer">
        <h2 className="title mainTitle">{`${selectedproject} Projects`}</h2>
        <div className="ProjectTypes">
          {ProjectTypes.map(({name, label})=> <p className={`${(selectedproject === label) && "ProjectTypeActive"} ProjectType`} onClick={() => setSelectedproject(label)}>{name}</p>)}
        </div>
      </div>
      <div className="Projects">
        {AllProjects.slice(0, limit ? 4 : AllProjects.length).filter(({ category }) => category.includes(selectedproject)).map((project) => {
          const { name, description, tag, images, shortDescription, placeholderImage } = project
          return (
            <div className="Project">
              <div className="Image">
                <img alt="" src={`./images/${placeholderImage}`}/>
              </div>
              <div className="Details">
                <div>
                  <h3>About : </h3>
                  <p>{description}</p>
                </div>
                <div className="Footer">
                  <div className="">
                    <h2>{name}</h2>
                    <p>{shortDescription}</p>
                  </div>
                  <Link to={{pathname: "/project-details", state: {project: JSON.stringify(project)} }} className="moreButton">View</Link>
                </div>
              </div>
            </div>
          )}
        )}
      </div>
      {projectToView && <ViewProject projectToView={projectToView} setProjectToView={setProjectToView} />}
      <div className="AllProjects">
        <Link to={limit ? "/projects" : "/"} ><h3 className="Button">{limit ? "View All Projects" : "Go Back"}</h3></Link>
      </div>
    </div>
  );
}

export default Projects;

// {AllProjects.filter(({ category }) => category.includes(selectedproject)).map((project) => {
//   const { name, description, tag, images } = project
//   return (
//   <div className="Project" key={name}>
//     <div className="Images">
//       <p className="Tag">{tag}</p>
//       <img alt="" src="images/crown-clothing-1.png"/>
//     </div>
//     <div className="Description">
//       <h3>{name}</h3>
//       <p>{description}</p>
//     </div>
//     <div className="Footer">
//       <p onClick={()=>setProjectToView(project)} className="Link">View More</p>
//     </div>
//   </div>)}
// )}
