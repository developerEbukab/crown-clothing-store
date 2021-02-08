import React from 'react';
import "./AboutMeTablet.styles.scss";

const AboutMeTablet = () => {
  return (
    <div className="AboutMeTablet">
      <div className="ImageContainer">
        <div className="StyleBox">
      </div>
        <div
          className="Image"
          style={{ backgroundImage: "url(" + "/images/bitmoji.jpeg" + ")", backgroundRepeat : "no-repeat", backgroundSize : "100% 100%", }}
            className="imageInner Image"
        >
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/developerEbukab"><i className="fab fa-github position-1"></i></a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/chukwuebuka-beluolisa/"><i className="fab fa-linkedin-in position-2"></i></a>
          <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@ebeluolisa"><i className="fab fa-medium-m position-3"></i></a>
        </div>
      </div>
      <div className="AboutMeTablet-Details">
        <div className="text">
          <h1 className="name">Ebuka Beluolisa</h1>
          <h3 className="role">Full Stack Developer</h3>
        </div>
        <div className="aboutMe">
          <p>
            I'm experienced in the entire software development lifecycle process, from project & requirements planning, UI/UX design & prototyping, software development, testing, security! , deployment, app scaling,  and continuous maintenance. These are all things that I've done for the past 4 years, and I am really confident that with my skills, experience and fast learning ability , I would be a great asset to your company.
          </p>
        </div>
        <div className="buttons">
          <div className="button inverted">Resume</div>
          <div className="button"><a href = "mailto:ebeluolisa@hotmail.com">Contact Me</a></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeTablet;
