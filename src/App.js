import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// eslint-disable-next-line
import { Navigation, Footer, Home, About } from "./components";
import './scss/App.scss';
import './scss/custom.scss';

function App() {
  return (
    <div className="App d-flex p-2 flex-column align-self-center justify-content-center">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;