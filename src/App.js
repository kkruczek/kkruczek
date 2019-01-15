import React from 'react';
import './App.scss';
// import PageChat from './components/PageChat/PageChat';
import Header from './containers/Header/Header';
import AboutMe from './containers/AboutMe/AboutMe';
import HireMe from './containers/HireMe/HireMe';
import MySkills from './containers/MySkills/MySkills';
import GetInTouch from './containers/GetInTouch/GetInTouch';
import Footer from './containers/Footer/Footer';

const App = () => (
  <div className="App">
    {/* <PageChat/> */}
    <Header/>
    <AboutMe/>
    <HireMe/>
    <MySkills/>
    <GetInTouch/>
    <Footer/>
  </div>
);

export default App;
