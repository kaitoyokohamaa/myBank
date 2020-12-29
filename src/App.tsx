import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, theme } from "@chakra-ui/core";
import { Home } from "./components/pages/Home";
import SignUp from "./components/pages/Signup";
import SignIn from "./components/pages/Signin";
import "antd/dist/antd.css";
import Income from "./components/pages/Income";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact={true} component={Home} path="/home" />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/income" component={Income} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
