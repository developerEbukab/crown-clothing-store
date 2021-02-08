import React from 'react';
import "./Contents.styles.scss"
import Education from '../../components/Education/Education.component';
import Projects from '../../components/Projects/Projects.component';
import Skills from '../../components/Skills/Skills.components';
import WhyMe from '../../components/WhyMe/WhyMe.component';
import WorkHistory from '../../components/WorkHistory/WorkHistory.component';
import AboutMeTablet from '../../components/AboutMeTablet/AboutMeTablet.component';

const Contents = () => {
  return (
    <div className="contentsContainer">
      {/*
      <WhyMe/>
      */}
      <AboutMeTablet/>
      <Projects limit={true} />
      <WorkHistory />
      <Education/>
      <Skills/>
    </div>
  );
}

export default Contents;
