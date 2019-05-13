import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

import "../styles/main.css";

export default class Main extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Welcome to the React3D sandbox!
                </p>
                <Link className="App-link" to="/threeD">Come inside</Link>
            </header>
        </div>
    )
  }
}
