import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persist } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persist}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
