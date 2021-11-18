import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Menu, About, Schedule } from "./components";
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/menu" exact component={() => <Menu />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/schedule" exact component={() => <Schedule />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;