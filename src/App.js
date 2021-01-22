import React from "react";
import GamePage from "./GamePage";
import Login from "./Login";
import GameSummary from "./GameSummary";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const Links = (
    <ul>
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
  const Routes = (
    <>
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
    <Router>
      <div>
        <nav>{Links}</nav>
        <Switch>{Routes}</Switch>
      </div>
    </Router>
  );
}
