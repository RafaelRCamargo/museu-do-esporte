import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * Pages
 */
import Home from "./components/pages/Home";

/**
 * Components
 */
import Navbar from "./components/Navbar";

/**
 * Style
 */
import "./App.css";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
