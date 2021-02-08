import React from 'react';
import "./WhyMe.styles.scss";

const WhyMe = () => {
  return (
    <div className="whyMeContainer containerVerticalMarginLarge">
      <div className="mainTitle">SO ... WHY ME ?</div>
      <p>
        While i can go on and on about how amazing i am , and why i am the right programmer for your task. Here are my top qualities that i think makes me special .
      </p>
      <div className="qualities">
        <div className="quality">
          <h3>Passionate Learner </h3>
          {[<p>
            Given how fast paced the tech world is , things are always changing. I believe is very important to keep up with these changes . 
          </p>,
          <p>
            That is why i am always practicing, learning online, taking part in hackathons , and being a part and contributing to open source projects
          </p>]}
        </div>
        <div className="quality">
          <h3>Passionate Learner </h3>
          {[<p>
            Given how fast paced the tech world is , things are always changing. I believe is very important to keep up with these changes . 
          </p>,
          <p>
            That is why i am always practicing, learning online, taking part in hackathons , and being a part and contributing to open source projects
          </p>]}
        </div>
        <div className="quality">
          <h3>Passionate Learner </h3>
          {[<p>
            Given how fast paced the tech world is , things are always changing. I believe is very important to keep up with these changes . 
          </p>,
          <p>
            That is why i am always practicing, learning online, taking part in hackathons , and being a part and contributing to open source projects
          </p>]}
        </div>
        <div className="quality">
          <h3>Passionate Learner </h3>
          {[<p>
            Given how fast paced the tech world is , things are always changing. I believe is very important to keep up with these changes . 
          </p>,
          <p>
            That is why i am always practicing, learning online, taking part in hackathons , and being a part and contributing to open source projects
          </p>]}
        </div>
      </div>
    </div>
  );
}

export default WhyMe;
