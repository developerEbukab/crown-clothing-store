import React from 'react';
import "./Education.styles.scss"
import { EducationList } from './education';

const Education = () => {
  return (
    <div className="educationContainer ">
      <div className="mainTitleContainer">
        <h2 className="mainTitle">Education</h2>
      </div>
      <div className="items">
        <div className="item">
          <i className="fas fa-school"></i>
          <div className="details">
            <a rel="noopener noreferrer" target="_blank" href="https://www.udemy.com/user/chukwuebuka-beluolisa/" className="title">B.S Honours with Specialization in Computer Science</a>
            <div className="content">
              <p>University Of Ottawa</p>
              <p className="date">2015-2020</p>
            </div>
            <p>For my honours project , i did a research on the implementation of SE-Linux, for Multi-Level and Multi-Category Security systems, which received an honorary grade (A).  </p>
          </div>
        </div>  
        <div className="item">
          <i className="fas fa-globe-americas"></i>
          <div className="details">
            <a rel="noopener noreferrer" target="_blank" href="https://www.udemy.com/user/chukwuebuka-beluolisa/" className="title">Zero To Mastery Coding Bootcamp</a>
            <div className="content">
              <p>Online Education</p>
              <p className="date">Ongoing</p>
            </div>
            <p>I understand that this is a very fast paced field. So to ensure I am always learning and practicing my skills , I take courses on platforms such as Udacity , CodeAcademy , Udemy , etc. Check out
            <a rel="noopener noreferrer" target="_blank" href="https://www.udemy.com/user/chukwuebuka-beluolisa/" > My course catalogue</a> </p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Education;
