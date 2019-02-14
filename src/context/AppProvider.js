/* eslint-disable */
import React from 'react';
import withStorage from "../hoc/withStorage";

export const AppContext = React.createContext();

class AppProviderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.checkAppSettings = this.checkAppSettings.bind(this);

    this.setShowLoader = this.setShowLoader.bind(this);
    this.setShowMainPage = this.setShowMainPage.bind(this);

    this.checkAppSettings();

    this.state = {
      showLoader: false,
      setShowLoader: this.setShowLoader,
      showMainPage: !JSON.parse(this.props.load('appConfig')).chatbotEnabled,
      setShowMainPage: this.setShowMainPage
    };

    this.spinner = document.getElementById('spinner');
  }

  checkAppSettings() {
    try {
      if (JSON.parse(this.props.load('appConfig')).chatbotEnabled) {
        this.props.save('appConfig', JSON.stringify({ chatbotEnabled: true }));
      }
    } catch (e) {
      this.props.save('appConfig', JSON.stringify({ chatbotEnabled: true }));
    }
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

const AppProvider = withStorage(AppProviderComponent);

export default AppProvider;
