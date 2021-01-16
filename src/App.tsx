import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider, theme } from "@chakra-ui/core";

import "antd/dist/antd.css";

const Home = lazy(() => import("./components/pages/Home"));
const SignUp = lazy(() => import("./components/pages/Signup"));
const SignIn = lazy(() => import("./components/pages/Signin"));
const Income = lazy(() => import("./components/pages/Income"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} component={Home} path="/home" />
            <Route exact path="/" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/income" component={Income} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
