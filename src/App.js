/* eslint-disable no-undef */
import React from 'react';
import './App.scss';
import ChatPage from './containers/ChatPage/ChatPage';
import HomePage from './containers/HomePage/HomePage';
import { AppContext, AppProvider } from './context/AppProvider';

const App = () => (
  <AppProvider>
    <AppContext.Consumer>
      {context => (
        <React.Fragment>
          {
            !context.showMainPage && !context.showLoader && (
              <ChatPage/>
            )
          }
          {
            context.showMainPage && !context.showLoader && (
              <HomePage/>
            )
          }
        </React.Fragment>
      )
      }
    </AppContext.Consumer>
  </AppProvider>
);

export default App;
