import React, { Component } from 'react'

import logo from '../logo.svg';

export default class Slider extends Component {
  render() {
    return (
        <div  className="App">
        <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            <code style={{fontSize: 'inherit'}}>MAKE IT HAPPEN!</code>
WINING IS EASIER THAN YOU THINK!
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
        >
            Join with NeXuS  <i class="fas fa-arrow-right"></i>
        </a>
        <br />
        <button type="button" class="btn btn-danger">LEARN MORE</button>
        
        </header>
        </div>
    )
  }
}
