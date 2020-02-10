import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table } from './components/org-members-table/Org-member-table';
import { Login } from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Login</h2>
      <Login />
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: '50px' }}>
      <h2>Dashboard</h2>
      <Table />
    </div>
  );
}
