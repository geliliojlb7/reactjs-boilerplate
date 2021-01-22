import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "connected-react-router/immutable";
import { Provider } from "react-redux";

import './index.css';
import configureStore from "./configureStore";
import history from "./utils/history";
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const intialState = {};
const store = configureStore(intialState, history);
const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
  </Provider>,
  MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
