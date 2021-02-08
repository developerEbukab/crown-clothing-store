import React, {useState} from 'react';
import "./Skills.styles.scss"
import { ALLSKILLS, FRONTEND, BACKEND, DATABASES, SkillTypes} from './skills';
// import { ProjectTypes } from '../Projects/project.utils';

const Skills = () => {
  const [skillOption, setSkillOption] = useState("All");

  const getSkills = () => {
    return (skillOption === "All" && ALLSKILLS) || (skillOption === "Front End" && FRONTEND)  || (skillOption === "Back End" && BACKEND)  || (skillOption === "Databases" && DATABASES) 
  }

  return (
    <div className="skillsContainer ">
      <div className="mainTitleContainer">
        <h2 className="mainTitle">My Skills</h2>
        <div className="ProjectTypes">
          {SkillTypes.map((name)=> <p className={`${(skillOption === name) && "ProjectTypeActive"} ProjectType`} onClick={() => setSkillOption(name)}>{name}</p>)}
        </div>
      </div>
      <div className="skills">
        {
          (getSkills()).map(({icon, name }) => (
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
  );
}

export default Skills;

// <div className="skillsOptions">
//   <p 
//     className={`${skillOption === "all" && "active"} option`}
//     onClick = {()=> setSkillOption("all")}
//   >
//     All
//   </p>
//   <p 
//     className={`${skillOption === "front" && "active"} option`}
//     onClick = {()=> setSkillOption("front")}
//   >
//     Front End
//   </p>
//   <p 
//     className={`${skillOption === "back" && "active"} option`}
//     onClick = {()=> setSkillOption("back")}
//   >
//     Back End
//   </p>
//   <p 
//     className={`${skillOption === "database" && "active"} option`}
//     onClick = {()=> setSkillOption("database")}
//   >
//     Databases
//   </p>
// </div>
