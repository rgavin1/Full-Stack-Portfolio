import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
