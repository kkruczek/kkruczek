import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    constructor() {
      super();

      this.checkLocalStorageExists = this.checkLocalStorageExists.bind(this);
      this.load = this.load.bind(this);
      this.save = this.save.bind(this);
      this.remove = this.remove.bind(this);

      this.state = {
        localStorageAvailable: true
      };
    }

    componentDidMount() {
      this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
      const testKey = 'test';

      try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        this.setState({ localStorageAvailable: true });
      } catch (e) {
        this.setState({ localStorageAvailable: false });
      }
    }

    load(key) {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key);
      }

      return null;
    }

    save(key, data) {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }

    remove(key) {
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default withStorage;