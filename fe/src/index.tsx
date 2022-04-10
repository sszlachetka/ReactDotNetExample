import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "store";
import ReactDOM from "react-dom";
import { createMsalInstance } from "authentication";

const msalInstance = createMsalInstance();
const store = configureStore();
const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App store={store} msalInstance={msalInstance} />
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
