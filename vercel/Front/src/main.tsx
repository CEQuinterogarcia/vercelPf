import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./Redux/index.ts";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "react-hot-toast";
import { HashRouter as Router } from 'react-router-dom';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
//const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
const grant_type = "authorization_code";
const redirectUri = `${window.location.origin}/MiPerfil`;
const logoutUri = `${window.location.origin}`;

const auth0Config = {
  domain,
  clientId,
  grant_type,
  //audience,
  authorizationParams: {
    redirect_uri: redirectUri,
    logout_uri: logoutUri,
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
       <Router>
        <Auth0Provider {...auth0Config}>
          <App />
          <Toaster />
        </Auth0Provider>
      </Router>
    </React.StrictMode>
  </Provider>
);
