import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";

import "../styles/globals.css";
import "../styles/index.css";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
