import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import SignUp from "./components/pages/Signup"
import SignIn from "./components/pages/Signin"
const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact={true} component={Home} path="/home" />
        <Route exact path="/" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
