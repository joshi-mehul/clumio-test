import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { all, fork } from 'redux-saga/effects';
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchDiscoverMovies, watchDiscoverGenre } from "./sagas/saga";

function* root() {
    yield all([
        fork(watchDiscoverMovies),
        fork(watchDiscoverGenre),
    ]);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
