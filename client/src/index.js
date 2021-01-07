import React from 'react';
import ReactDOM from 'react-dom';
import createStore from "./reducks/store/store"
import { ConnectedRouter } from "connected-react-router"
import * as History from "history"
import App from './App';
import { Provider } from 'react-redux';

const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
