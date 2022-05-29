import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span> Albert </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Albert</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, Python, ReactJS, ReactNative, SQL .
        </h4>
        <h2>
          <a href="halilibrahim.soyman@gmail.com">Send email</a> :
          halilibrahim.soyman@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
