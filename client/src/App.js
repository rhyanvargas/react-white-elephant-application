import React, { useState } from "react";
import GamePage from "./GamePage";
import Login from "./Login";
import Home from "./Home";
import GameSummary from "./GameSummary";
import Header from "./GamePage/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export const Links = (
  <ul className="nav-link-container flex start">
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/game">GamePage</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/summary">Summary</Link>
    </li>
  </ul>
);

export default function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);
  const Routes = (
    <>
      <Route
        exact
        path="/"
        render={() => {
          return isUserAuthenticated ? (
            <Redirect to="/game" />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/game">
        <GamePage />
      </Route>
      <Route path="/summary">
        <GameSummary />
      </Route>
    </>
  );
  return (
    <>
      <Router>
        <Header />
        <Switch>{Routes}</Switch>
      </Router>
    </>
  );
}
