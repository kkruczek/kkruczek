import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  background: #FFFFFF;
`;

const About = styled.div`
  max-width: 980px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  
  padding-bottom: 170px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0;
    padding: 0 16px 170px 16px;
  }
  
  @media (max-width: 768px) {
    padding: 0 16px 40px 16px;
  }
`;

const Heading = styled.h2`
  position: relative;
  max-width: 720px;
  color: #0B1C4C;
  font-family: Roboto-Light, sans-serif;
  font-weight: 300;
  font-size: 36px;
  line-height: 54px;
  margin-top: -80px;
  
  &:after {
    content: '';
    position: absolute;
    height: 6px;
    bottom: -20px;
    left: 0;
    width: 50px;
    border-radius: 3px;
    background: #235EFF;
    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#4997FF), to(#235EFF));
    background-image: -webkit-linear-gradient(left, #4997FF, #235EFF);
    background-image: -moz-linear-gradient(left, #4997FF, #235EFF);
    background-image: -o-linear-gradient(left, #4997FF, #235EFF);
    box-shadow: 0 3px 8px 0 rgba(35,94,255,0.1);
    
    @media (max-width: 768px) {
      bottom: -13px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 21px;
    font-family: Roboto-Regular, sans-serif;
    line-height: 31px;
    margin-top: -46px;
  }
`;

const Paragraph = styled.p`
  max-width: 750px;
  color: #0B1C4C;
  font-family: Roboto-Regular, sans-serif;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.6;
  
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const AboutMe = () => (
  <Wrapper>
    <About>
      <Heading>
        {'Mobile first web development with HTML, CSS, JavaScript and React.'}
      </Heading>
      <Paragraph>
        {'My name is Kamil Kruczek. I\'m a freelance frontend web developer based in Poland and I\'d like to help you build your next project.'}
      </Paragraph>
    </About>
  </Wrapper>
);

export default AboutMe;
