import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// eslint-disable-next-line
import { Navigation, Footer, Home, Menu, About } from "./components";
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
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;