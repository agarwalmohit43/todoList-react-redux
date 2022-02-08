import React from "react";
import ReactDOM from "react-dom";

import App from "./common/js/components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import combineReducers from "./reducers";

const store = createStore(combineReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
