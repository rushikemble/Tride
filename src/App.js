import React from "react";
import Home from "./Home/Home";
import Main from "./Main/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Main" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
