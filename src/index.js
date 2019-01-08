/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/fonts/fontawesome/css/all.min.css';
import './assets/styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
