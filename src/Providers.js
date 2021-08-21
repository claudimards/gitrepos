import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCss";
import GithubProvider from "./provider";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
