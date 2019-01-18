import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "react-sidebar"; // API https://github.com/balloob/react-sidebar
import Headroom from "react-headroom"; // API https://kyleamathews.github.io/react-headroom/
import { Button } from 'semantic-ui-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
          contentClassName="sidebar-content"
          overlayClassName="sidebar-overlay"
          sidebarClassName="sidebar"
        >
        </Sidebar>

        <div 
          className="sidebar-button"
          onClick={() => this.onSetSidebarOpen(true)}>
        </div>

        <Headroom style={{
          background: "white", 
          height: "50px",
          WebkitTransition: 'all 1s ease-in-out',
          MozTransition: 'all 1s ease-in-out',
          OTransition: 'all 1s ease-in-out',
          transition: 'all 1s ease-in-out'
        }
          }>
          PUT WHATEVER YOU WANT HERE :D :D :D
        </Headroom>

          <Button>CLICK</Button>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>NOTHING</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
