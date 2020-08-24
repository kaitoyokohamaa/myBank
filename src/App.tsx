import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home"
const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact={true} component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
