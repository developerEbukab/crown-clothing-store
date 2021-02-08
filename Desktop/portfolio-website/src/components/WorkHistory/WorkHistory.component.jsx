import React from 'react';
import "./WorkHistory.styles.scss"
import {Works} from "./WorkHistory"

const WorkHistory = () => {
  return (
    <div className="WorkHistoryContainer ">
      <div className="mainTitleContainer">
        <h2 className="mainTitle">Work History</h2>
      </div>
      {Works.map(({role, startDate, endDate, companyName, location, techStack, about, implementations, link}) =>
        <div className="workContainer">
          <div className="typeContainer RemoveFromMobileView">
            <h3 className="role">{role}</h3>
            <p>{startDate} - {endDate}</p>
          </div>
          <div className="contentContainer">
            <div className="HeadingContainer">
              <div className="Heading">
                <div className="pointerBox">
                  <p className="pointer" >&#9679;</p>
                </div>
                <h3>{companyName}</h3>
              </div>
              <div className="location RemoveFromMobileView">
                <i class="fas fa-map-marker-alt"></i>
                <p>{location}</p>
              </div>
            </div>
            <div className=" ForMobile">
              <div className="typeContainer ">
                <h3 className="role">{role}</h3>
                <div className="dateAndLocationMobile">
                  <p>{startDate} - {endDate}</p>
                  {/*<div className="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>{location}</p>
                  </div>*/}
                </div>
              </div>
            </div>
            <p>{about}</p>
            <div className="implementations">
              {implementations.map((implementation) =>
                <div className="listItem">
                  <p className="point" >&#9679;</p>
                  <p>{implementation}</p>
                </div>
              )}
            </div>
            <p><span className="techTitle">Tech Stack</span>: {techStack}</p>
            {link && <a target="_blank" rel="noopener noreferrer" href={link}><p className="linkButtonCompany">View project</p></a>}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkHistory;
