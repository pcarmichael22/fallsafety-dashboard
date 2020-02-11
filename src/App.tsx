import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table } from "./components/org-members-table/Org-member-table";
import Login from "./components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("loggedIn:", loggedIn);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            {loggedIn ? <div /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            {!loggedIn ? (
              <Login setLoggedIn={setLoggedIn} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Dashboard</h2>
      <Table />
    </div>
  );
}
