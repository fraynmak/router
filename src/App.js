import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import error from "./components/Error";
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div>
      <Navigation />
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={error} />
    </Switch>
    </div>
    </BrowserRouter>  
    );
  }
}

export default App;
