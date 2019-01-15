import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import HireMe from '../HireMe/HireMe';
import MySkills from '../MySkills/MySkills';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';

const StyledHomePage = styled.main`
  transition: opacity 0.3s ease;
  
  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
  }
`;

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      componentActiveToFade: false
    };

    setTimeout(() => this.setState({ componentActiveToFade: true }), 100);
  }

  render() {
    return (
      <CSSTransition
        in={this.state.componentActiveToFade}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <StyledHomePage>
          <Header/>
          <AboutMe/>
          <HireMe/>
          <MySkills/>
          <GetInTouch/>
          <Footer/>
        </StyledHomePage>
      </CSSTransition>
    );
  }
}

export default HomePage;
