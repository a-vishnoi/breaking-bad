import React from 'react';
import {
	Switch,
	Route,
} from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import Header from "./components/Header";
import Character from "./pages/Character";

function App() {
  return (
    <div className="container">
      <Header />
	    <Switch>
		    <Route exact path="/" component={Home} />
		    <Route exact path="/character/:id" component={Character} />
	    </Switch>
	    <div className="mb-5"></div>
    </div>
  );
}

export default App;
