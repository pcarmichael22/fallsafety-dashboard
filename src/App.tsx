import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Test } from "./components/TestComponent/Test";
import { MemberTable } from "./components/org-members-table/Org-member-table";
import { IssueTable } from "./components/memberIssue/Org-member-issue-table";
import Login from "./components/Login/Login";
import { AppProvider } from "./appContext";
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
    <AppProvider>
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
    </AppProvider>
  );
}

function Dashboard() {
  return (
    <>
      <div style={{ padding: "50px" }}>
        <h2>Dashboard</h2>
        <MemberTable />
      </div>
      <div style={{ padding: "50px" }}>
        <IssueTable />
      </div>
      <div>
        <Test />
      </div>
    </>
  );
}
