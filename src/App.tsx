import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import SignUp from "./components/pages/Signup"
const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact={true} component={Home} path="/" />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
