/* eslint-disable */
import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor() {
    super();

    this.setShowLoader = this.setShowLoader.bind(this);
    this.setShowMainPage = this.setShowMainPage.bind(this);

    this.state = {
      showLoader: false,
      setShowLoader: this.setShowLoader,
      showMainPage: false,
      setShowMainPage: this.setShowMainPage
    };

    this.spinner = document.getElementById('spinner');
  }

  setShowLoader(showLoader) {
    this.setState({showLoader}, () => {
      this.spinner && !this.spinner.hasAttribute('hidden')
        ? this.spinner.setAttribute('hidden', 'true')
        : this.spinner.removeAttribute('hidden');
    });
  }

  setShowMainPage(show, time = 1000) {
    this.setShowLoader(true);
    setTimeout(() => {
      this.setState({showMainPage: show}, () => this.setShowLoader(false));
    }, time);
  }

  componentDidMount() {
    this.setShowLoader(false);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
