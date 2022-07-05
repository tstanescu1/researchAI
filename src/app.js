import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Profile, Research } from "./views";

import "./app.css";
import Auth0ProviderWithHistory from "./services/auth0Provider";

const App = () => {
  return (
    <Auth0ProviderWithHistory>
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/research" component={Research} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
    </Auth0ProviderWithHistory>
  );
};

export default App;
