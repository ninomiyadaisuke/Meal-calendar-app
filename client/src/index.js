import React from 'react';
import ReactDOM from 'react-dom';
import createStore from "./reducks/store/store"
import { ConnectedRouter } from "connected-react-router"
import * as History from "history"
import App from './App';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react"

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const history = History.createBrowserHistory()
export const store = createStore(history)

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
