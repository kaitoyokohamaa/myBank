import type { AppProps /*, AppContext */ } from "next/app";
import React, { Fragment } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
export default MyApp;
