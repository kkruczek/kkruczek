import React from 'react';
import './App.scss';
// import PageChat from './components/PageChat/PageChat';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import HireMe from './components/HireMe/HireMe';

const App = () => (
  <div className="App">
    {/* <PageChat/> */}
    <Header/>
    <AboutMe/>
    <HireMe/>
  </div>
);

export default App;
