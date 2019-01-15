import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import ChatBot from 'react-simple-chatbot';
import avatar from '../../assets/images/kkr.jpg';
import chatSteps from './chatSteps';
import chatStyles from './chatStyles';
import { AppContext } from '../../context/AppProvider';

const StyledChat = styled(ChatBot)`${chatStyles}`;

class ChatPage extends React.Component {
  constructor() {
    super();

    this.state = {
      componentActiveToFade: false
    };

    setTimeout(() => this.setState({ componentActiveToFade: true }), 100);
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ setShowMainPage }) => (
          <CSSTransition
            in={this.state.componentActiveToFade}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <StyledChat
              steps={chatSteps}
              botAvatar={avatar}
              handleEnd={() => {
                setTimeout(() => {
                  this.setState({ componentActiveToFade: false });

                  setTimeout(() => {
                    setShowMainPage(true, 1500);
                  }, 300);
                }, 1000);
              }}
              hideHeader
              hideSubmitButton
              footerStyle={{ display: 'none' }}
              inputStyle={{ display: 'none' }}
              floatingStyle={{ backgroundColor: 'red' }}
            />
          </CSSTransition>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ChatPage;
