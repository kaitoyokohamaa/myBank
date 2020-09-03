import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, theme } from '@chakra-ui/core'
import Home from "./components/pages/Home"
import SignUp from "./components/pages/Signup"
import SignIn from "./components/pages/Signin"
const App: React.FC = () => {
  return (
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact={true} component={Home} path="/" />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
