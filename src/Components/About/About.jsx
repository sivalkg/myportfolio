import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import siva_about from "../../assets/siva_profile.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Img" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={siva_about} alt="img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a Graphic Designer & Frontend Developer located in Andhra
              Pradesh,India
            </p>
            <p>
              Helping many content creators for getting the better reach and
              high end presence of them in Social Media
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Photoshop</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-acheivements">
        <div className="about-acheivement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>300+</h1>
          <p>Designs Completed</p>
        </div>
        <hr />
        <div className="about-acheivement">
          <h1>30+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
