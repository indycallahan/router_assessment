import React, { Component } from 'react';

import reactLogo_blue from './components/logoImages/reactLogo_blue.svg';

import Welcome from './components/welcome/welcome';
import Clock from './components/clock/clock';
import Contact from './components/contact/contact';

import Navigation from './components/navigation/navigation';

import DynamicUrl from './components/dynamicUrl/dynamicUrl';

import NotFound from './components/notFound/NotFound';
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo_blue} className="App-logo" alt="logo" />
          {/* <Welcome name1="Eric" name2="Pete" /> */}
          <Navigation />

          <Switch>
            <Route exact path = "/" />
            <Route exact path="/welcome/"
              render={(props) => <Welcome {...props}
                name1="Eric" name2="Pete" />}
                />
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/contact" component={Contact} />
          
           
            {/* <Route exact path="/welcome/" component={DynamicUrl} /> */}
           
            <Route path="/welcome/:name" component={DynamicUrl} />
            <Route component={NotFound} />        

          </Switch>

          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a> */}
        </header>
      </div>
    );
  }
}

export default App;
