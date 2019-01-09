/* eslint-disable react/prop-types */
import React from 'react';
import { Emoji } from 'emoji-mart';
import PageChatMessage from './PageChatMessage/PageChatMessage';

let options = [
  { value: 'presentation', label: 'Tell me a bit about you!', trigger: 'optionPresentation' },
  { value: 'contact', label: 'How can I contact you?', trigger: 'optionContact' },
  { value: 'projects', label: 'I would like to see your commercial projects!', trigger: 'optionProjects' },
  {
    value: 'exit', label: 'Skip chat and go further', trigger: 'optionExit', metadata: { className: 'link exit' }
  }
];

const Greetings = () => (
  <PageChatMessage>
    {'Hey, I\'m Kamil!'}{' '}
    <Emoji set="messenger" emoji=":muscle:" size={24}/>
  </PageChatMessage>
);

const CanIHelp = () => (
  <PageChatMessage>
    {'How can I help you?'}{' '}
    <Emoji set="facebook" emoji=":thinking_face:" size={24}/>
  </PageChatMessage>
);

const DailyBasis = () => (
  <PageChatMessage>
    {'On daily basis I\'m '}<strong>Frontend Developer</strong>{', working with React, JavaScript, HTML5 and CSS3.'}
  </PageChatMessage>
);

const PresentationHome = () => (
  <PageChatMessage>
    {'My name is '}<strong>Kamil Kruczek</strong>{', I am from Poland and I live in Rzeszów.'}
  </PageChatMessage>
);

const PresentationExperience = () => (
  <PageChatMessage>
    {'As you know, I\'m '}
    <strong>Frontend Developer</strong>
    {` with at least of ${new Date().getFullYear() - 2015}
    years of experience at sectors knowledge like IT, banking and law.`}
  </PageChatMessage>
);

const PresentationTechnologiesAndTools = () => (
  <PageChatMessage>
    {'At this time, some tools that I used and responsibilities:'}
    <ul>
      <li>creating/editing views in React,</li>
      <li>managing states with Redux,</li>
      <li>connecting to Google Analytics,</li>
      <li>define styles for UI using SASS preprocessor and styled components,</li>
      <li>bundling JavaScript files using webpack,</li>
      <li>BitBucket,</li>
      <li>Confluence,</li>
      <li>Jira,</li>
      <li>and many, many more!</li>
    </ul>
  </PageChatMessage>
);

const PresentationFindMe = () => (
  <PageChatMessage>
    {'For more informations, you can find me at '}
    <a href="https://www.linkedin.com/in/kamil-kruczek" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    {' or '}
    <a href="http://github.com/kkruczek" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>{'.'}
  </PageChatMessage>
);

const Contact = () => (
  <PageChatMessage>
    {'Feel free to contact me via email '}<strong>kamil.kruczek@o2.pl</strong>
    {', I will respond as soon as possible!'}
  </PageChatMessage>
);

const AboutProjectsSourceCode = () => (
  <PageChatMessage>
    {'Commercial projects have it that the source code, unfortunately, we can not share, and you know - the most is happening in them.'}
  </PageChatMessage>
);

const AboutProjectsProgrammingStyle = () => (
  <PageChatMessage>
    {'I will send you a packed file with an example of application. It will allow you to look at the programming style a bit.'}
  </PageChatMessage>
);

const AboutProjects = () => (
  <PageChatMessage>
    {'Please send me a message to an email '}<strong>kamil.kruczek@o2.pl</strong>{' and I will contact you as soon as possible!'}
  </PageChatMessage>
);

const Options = props => (
  <ul className="rsc-os-options">
    {
      options.map(o => (
        <li
          key={o.value}
          className="rsc-os-option"
        >
          <button
            className={`rsc-os-option-element ${o.metadata ? o.metadata.className : ''}`}
            onClick={() => {
              props.triggerNextStep({ trigger: o.trigger });
              options = options.filter(i => i.value !== o.value);
            }}
          >
            {o.label}
          </button>
        </li>
      ))
    }
  </ul>
);

const OptionPresentation = () => (
  <ul className="rsc-os-options">
    <li className="rsc-os-option">
      <button
        className="rsc-os-option-element static"
      >
        {'Tell me a bit about you!'}
      </button>
    </li>
  </ul>
);

const OptionContact = () => (
  <ul className="rsc-os-options">
    <li className="rsc-os-option">
      <button
        className="rsc-os-option-element static"
      >
        {'How can I contact you?'}
      </button>
    </li>
  </ul>
);

const OptionProjects = () => (
  <ul className="rsc-os-options">
    <li className="rsc-os-option">
      <button
        className="rsc-os-option-element static"
      >
        {'I would like to see your commercial projects!'}
      </button>
    </li>
  </ul>
);

const OptionExit = () => (
  <ul className="rsc-os-options">
    <li className="rsc-os-option">
      <button
        className="rsc-os-option-element static"
      >
        {'I would like to skip chat and go further'}
      </button>
    </li>
  </ul>
);

const chatSteps = [
  {
    id: 'greetings',
    component: <Greetings/>,
    trigger: 'dailyBasis',
    asMessage: true,
    delay: 600
  },
  {
    id: 'dailyBasis',
    component: <DailyBasis/>,
    trigger: 'canIHelp',
    asMessage: true,
    delay: 1000
  },
  {
    id: 'canIHelp',
    component: <CanIHelp/>,
    trigger: 'options',
    asMessage: true,
    delay: 700
  },
  {
    id: 'options',
    component: <Options/>,
    asMessage: false,
    delay: 1000,
    replace: true
  },
  {
    id: 'optionPresentation',
    component: <OptionPresentation/>,
    asMessage: false,
    delay: 1000,
    trigger: 'presentationHome'
  },
  {
    id: 'presentationHome',
    component: <PresentationHome/>,
    trigger: 'presentationExperience',
    asMessage: true,
    delay: 1000
  },
  {
    id: 'presentationExperience',
    component: <PresentationExperience/>,
    trigger: 'presentationFindMe',
    asMessage: true,
    delay: 2000
  },
  {
    id: 'presentationTechnologiesAndTools',
    component: <PresentationTechnologiesAndTools/>,
    trigger: 'presentationFindMe',
    asMessage: true,
    delay: 2000
  },
  {
    id: 'presentationFindMe',
    component: <PresentationFindMe/>,
    trigger: 'options',
    asMessage: true,
    delay: 2000
  },
  {
    id: 'optionContact',
    component: <OptionContact/>,
    asMessage: false,
    delay: 1000,
    trigger: 'contact'
  },
  {
    id: 'contact',
    component: <Contact/>,
    trigger: 'options',
    asMessage: true,
    delay: 1000
  },
  {
    id: 'optionProjects',
    component: <OptionProjects/>,
    asMessage: false,
    delay: 1000,
    trigger: 'aboutProjectsSourceCode'
  },
  {
    id: 'aboutProjectsSourceCode',
    component: <AboutProjectsSourceCode/>,
    trigger: 'aboutProjectsProgrammingStyle',
    asMessage: true,
    delay: 1100
  },
  {
    id: 'aboutProjectsProgrammingStyle',
    component: <AboutProjectsProgrammingStyle/>,
    asMessage: true,
    delay: 2300,
    trigger: 'projects'
  },
  {
    id: 'projects',
    component: <AboutProjects/>,
    trigger: 'options',
    asMessage: true,
    delay: 2000
  },
  {
    id: 'optionExit',
    component: <OptionExit/>,
    asMessage: false,
    delay: 1000,
    trigger: 'exit'
  },
  {
    id: 'exit',
    message: 'Alright! See ya!',
    end: true
  }
];

export default chatSteps;
