import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { redirectUri } from "../services/urlService";

const MainNav = () => {
  const {loginWithRedirect, logout, isLoading, user} = useAuth0();
  return (<div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    {user && <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>}
    {user && <NavLink
      to="/research"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Research
    </NavLink>}
    {!isLoading && !user && (
      <button 
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect({
        appState: { target: '/' }
      })}
      >Log In</button>
    ) }
        {!isLoading && user && (
      <button 
      className="btn btn-primary btn-block"
      onClick={() =>  logout({ returnTo: redirectUri })}
      >Log Out</button>
    ) }
  </div>)
};

export default MainNav;
