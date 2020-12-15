import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import graphQlClient from "./Config/index";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphQlClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
