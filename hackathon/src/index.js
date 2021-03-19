import store from "./store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);