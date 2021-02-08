import React from 'react';
import "./AboutMe.styles.scss"

const AboutMe = () => {
  return (
    <div className="aboutMeContainer HideOnTablet">
      <div className="details">
        <div className="imageContainer">
          {<div
            style={{ backgroundImage: "url(" + "/images/bitmoji.jpeg" + ")", backgroundRepeat : "no-repeat", backgroundSize : "100% 100%", }}
            className="imageInner"
          />}
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/developerEbukab"><i className="fab fa-github position-1"></i></a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/chukwuebuka-beluolisa/"><i className="fab fa-linkedin-in position-2"></i></a>
          <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@ebeluolisa"><i className="fab fa-medium-m position-3"></i></a>
        </div>
        <div className="text">
          <h3 className="name">Ebuka Beluolisa</h3>
          <p className="role">Full Stack Developer</p>
        </div>
      </div>
      <div className="aboutMe">
        <p>
          I am a Full Stack Web & Mobile Developer enthusiast, experienced in the entire software development lifecycle process, from project planning, UI/UX design , development, testing, deployment, and continuous maintenance. With over 2 years of experience and fast learning ability , i am really confident that I would be a great asset to your company.
        </p>
      </div>
      <div className="buttons">
        <div className="button inverted">Resume</div>
        <div className="button"><a href = "mailto:ebeluolisa@hotmail.com">Contact Me</a></div>
      </div>
    </div>
  );
}

export default AboutMe;
