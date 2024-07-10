import React from "react";
import "./Hero.css";
import siva_profile from "../../assets/siva_profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={siva_profile} alt="profile" />
      <h1>
        <span>I am SivA Lkg,</span> frontend developer & graphic designer.
      </h1>
      <p>
        Learn all about how to implement font using the API CSS code. A web font
        is any font used in a website’s design that isn’t installed by default
        on the end user’s device—a counterpart to a system font.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
