import React from 'react';
import { Emoji } from 'emoji-mart';
import ChatPageMessage from './ChatPageMessage/ChatPageMessage';

let options = [
  { value: 'presentation', label: 'Tell me a bit about you!', trigger: 'optionPresentation' },
  { value: 'contact', label: 'How can I contact you?', trigger: 'optionContact' },
  { value: 'projects', label: 'I would like to see your commercial projects!', trigger: 'optionProjects' },
  {
    value: 'exit', label: 'Skip chat and go further', trigger: 'optionExit', metadata: { className: 'link exit' }
  }
];

const Greetings = () => (
  <ChatPageMessage>
    {'Hey, I\'m Kamil!'}{' '}
    <Emoji set="messenger" emoji=":muscle:" size={24}/>
  </ChatPageMessage>
);

const CanIHelp = () => (
  <ChatPageMessage>
    {'How can I help you?'}{' '}
    <Emoji set="facebook" emoji=":thinking_face:" size={24}/>
  </ChatPageMessage>
);

const DailyBasis = () => (
  <ChatPageMessage>
    {'On daily basis I\'m a '}<strong>Frontend Developer</strong>{', working with React, JavaScript, HTML5 and CSS3.'}
  </ChatPageMessage>
);

const PresentationHome = () => (
  <ChatPageMessage>
    {'My name is '}<strong>Kamil Kruczek</strong>{', I am from Poland and I live in Rzeszów.'}
  </ChatPageMessage>
);

const PresentationExperience = () => (
  <ChatPageMessage>
    {'I\'m '}
    <strong>Frontend Developer</strong>
    {` with at least of ${new Date().getFullYear() - 2016}
    years of experience at sectors knowledge like IT, banking and law.`}
  </ChatPageMessage>
);

const PresentationFindMe = () => (
  <ChatPageMessage>
    {'You can find me at '}
    <a href="https://www.linkedin.com/in/kamil-kruczek" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    {' or '}
    <a href="http://github.com/kkruczek" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>{'.'}
  </ChatPageMessage>
);

const Contact = () => (
  <ChatPageMessage>
    {'Feel free to contact me via email '}<strong>kamil.kruczek@o2.pl</strong>
    {', I will respond as soon as possible!'}
  </ChatPageMessage>
);

const AboutProjectsSourceCode = () => (
  <ChatPageMessage>
    {'Commercial projects have it that the source code, unfortunately, I can not share (NDA), and you know - the most is happening in them.'}
  </ChatPageMessage>
);

const AboutProjectsProgrammingStyle = () => (
  <ChatPageMessage>
    {'Feel free to browse the code available on '}
    <a href="http://github.com/kkruczek" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    {'. '}
    {'It will allow you to look at the programming style a bit.'}
  </ChatPageMessage>
);

const AboutProjects = () => (
  <ChatPageMessage>
    {'Please send me a message to an email '}<strong>kamil.kruczek@o2.pl</strong>{' if you have any questions or suggestions!'}
  </ChatPageMessage>
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
    delay: 1000
  },
  {
    id: 'presentationFindMe',
    component: <PresentationFindMe/>,
    trigger: 'options',
    asMessage: true,
    delay: 1000
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
    trigger: 'aboutProjectsProgrammingStyle'
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
    delay: 1000,
    trigger: 'projects'
  },
  {
    id: 'projects',
    component: <AboutProjects/>,
    trigger: 'options',
    asMessage: true,
    delay: 1000
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
