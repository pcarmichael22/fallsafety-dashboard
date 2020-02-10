import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return (
      <>
        <form>
          <p>Phone Number</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
