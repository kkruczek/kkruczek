import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import React from 'react';
import avatar from '../../assets/images/kkr.jpg';
import chatSteps from './chatSteps';
import chatStyles from './chatStyles';

const StyledChat = styled(ChatBot)`${chatStyles}`;

const PageChat = () => (<StyledChat
  steps={chatSteps}
  botAvatar={avatar}
  handleEnd={() => console.log('bot chat ended!')}
  hideHeader
  hideSubmitButton
  footerStyle={{ display: 'none' }}
  inputStyle={{ display: 'none' }}
/>);


export default PageChat;
